// main.ts (Deno Deploy entrypoint)
import { webhookCallback } from "https://deno.land/x/grammy@v1.39.2/mod.ts";
import { Bot } from "https://deno.land/x/grammy@v1.39.2/mod.ts";

const bot = new Bot(Deno.env.get("BOT_TOKEN")!);

bot.command("start", (ctx) => ctx.reply("Hello! 👋"));
bot.command("ping", (ctx) => ctx.reply(`Pong! ${new Date()} ${Date.now()}`));

const handleUpdate = webhookCallback(bot, "std/http");

Deno.serve(async (req) => {
  try {
    return await handleUpdate(req);
  } catch (err) {
    console.error(err);
    return new Response("OK", { status: 200 });
  }
});
