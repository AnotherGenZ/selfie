var Discord = require("discord.js");

module.exports = {
	delete: function () {
		//message count to prune
		let messagecount = parseInt(args[0]);
		//channel logs
		m.channel.fetchMessages({limit: 100})
		.then(messages => {
			let msg_array = messages.array();
			//filter to self
			msg_array  = msg_array.filter(m => m.author.id === bot.user.id);
			//limit to +1
			msg_array.length = messagecount +1;
			//indiv. delete messages
			msg_array.map(m => m.delete().catch(console.error));
			console.log("Pruned " + messagecount + " " + "messages");
		})

	}
}