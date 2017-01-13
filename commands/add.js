var Discord = require("discord.js");

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

module.exports = {
    math: function () {
        let num1 = args[0]
        let num2 = args[1]
        let sum = +args[0] + + args[1]
        m.channel.sendCode("xl", clean(sum));
    }    
}