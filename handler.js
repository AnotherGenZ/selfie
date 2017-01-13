var Discord = require("discord.js");
var prune = require("./commands/prune");
var ready = require("./commands/ready");
var kick = require("./commands/kick");
var info = require("./commands/info");
var add = require("./commands/add");

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}


module.exports = function (bot) {
    bot.on("message", m => {
        if (m.author !== bot.user) return;
        global.m = m;
        
        //set prefix
        var p = ">+";
        if (!m.content.startsWith(p)) return;

        //args
        global.args = m.content.split(" ").slice(1);
        
        //commands
        
        //prune
        if (m.content.startsWith(p + "prune")) {
            prune.delete();
        }
        
        //kick
        if (m.content.startsWith(p + "kick")) {
            kick.user();
        }
		
		//info
		if (m.content.startsWith(p + "info")) {
			info.bot();
		}
		
		//eval
		if(m.content.startsWith(p + "eval")) {
			try {
				var code = args.join(" ");
				var evaled = eval(code);

				if (typeof evaled !== "string")
				evaled = require("util").inspect(evaled);

				m.channel.sendCode("xl", clean(evaled));   
				} catch(err) {
				m.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
				console.log("Eval successfull");
			}
		}
		
		//add
		if(m.content.startsWith(p + "add")) {
			add.math();
		}
    });
};