var Discord = require("discord.js");

var unit = ['', 'K', 'M', 'G', 'T', 'P'];

    function bytesToSize(input, precision)
    {
        var index = Math.floor(Math.log(input) / Math.log(1024));
        if (unit >= unit.length) return input + ' B';
        return (input / Math.pow(1024, index)).toFixed(precision) + ' ' + unit[index] + 'B';
    }

var usage;
usage = process.memoryUsage();
	
module.exports = {
	bot: function () {
		const infoEmbed  = new Discord.RichEmbed()
            .setTitle('Selfie Bot By Motion')
            .setColor(0x00AE86)
            .setDescription('Information about Selfie')
	    .addField('Ram Usage', bytesToSize(usage.heapTotal))
	    .addField('Servers', `${bot.user.username} is in ${bot.guilds.size} guilds`)
            .addField('Channels', `${bot.user.username} is in ${bot.channels.size} channels`)
            .addField('Users', `${bot.user.username} knows ${bot.users.size} users`)
	    .addField('Discord.JS Version', `${Discord.version}`);
				m.delete();
				m.channel.sendEmbed(
				infoEmbed,
				'')
	}
}