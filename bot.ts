import { Application } from "https://deno.land/x/oak/mod.ts";
import { Bot } from "./deps.deno.ts";
import { webhookCallback } from "./deps.deno.ts";
import "jsr:@std/dotenv/load";

const app = new Application(); 


export const bot = new Bot(Deno.env.get("BOT_TOKEN") || "");

app.use(webhookCallback(bot, "oak"));

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

bot.command("ping", (ctx) => ctx.reply(`Pong! ${new Date()} ${Date.now()}`));
