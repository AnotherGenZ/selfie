var Discord = require("discord.js");
global.bot = new Discord.Client();
var handler = require("./handler");

bot.on("ready", () => {
    handler(bot);
});

bot.login("MTg2NTMyNTE0MTYzMDY0ODQy.Coq-Yw.6zLU_e4f8b9VNrdWrRPpYtujp64");