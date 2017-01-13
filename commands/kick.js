var Discord = require("discord.js");

module.exports = {
	user: function () {
		let userToKick = m.mentions.users.first();
		m.guild.member(userToKick).kick();
		console.log("A user was kicked");
	}
}