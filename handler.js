var Discord = require("discord.js");
var ai = require("./commands/ai");

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}


module.exports = function (bot) {
    bot.on("message", m => {
        global.m = m;
        
        //set prefix(s)
        var p = ">+";
        if (!m.content.startsWith(p)) return;

        //args
        global.args = m.content.split(" ").slice(1);
        
		if (m.content.startsWith(p + "hello")) {
			ai.hello();
			console.log(ai.hello);
		}
		
		if (m.content.startsWith(p + "how are you?")) {
			ai.hay();
			console.log(ai.hay);
		}
		
    });
};