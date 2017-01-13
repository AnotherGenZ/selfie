var Discord = require("discord.js");
global.bot = new Discord.Client();
var handler = require("./handler");

bot.on("ready", () => {
    handler(bot);
});

bot.login("user-token-here");