const { Client } = require("discord.js")

module.exports.run = async (bot, message, args) => {
	if (args.length > 0) {
		let hypixelPlayer

		message.channel.startTyping()

		try {
			hypixelPlayer = (await Client.getPlayer('name', args[0])).player
		}
		catch (err) {
			console.log(err)
			message.channel.stopTyping()
			message.channel.send('Hmm, that player doesn\'t seem to exist!')
			return
		}

		let playerRich = new Discord.RichEmbed()

		playerRich.setThumbnail('https://crafatar.com/avatars/' + (hypixelPlayer.uuid || '') + '?size=100')
		playerRich.setTitle('Hypixel Player: ' + hypixelPlayer.displayname)
		playerRich.setURL('https://hypixel.net/player/' + hypixelPlayer.displayname + '/')
		playerRich.setColor('#30DB09')

		playerRich.addField('Rank', (hypixelPlayer.rank || hypixelPlayer.packageRank || hypixelPlayer.newPackageRank || 'None').toString().replace(/_/g, ' '), true)
		playerRich.addField('Hypixel Level', hypixelPlayer.networkLevel || 'Not available', true)
		playerRich.addField('Karma', hypixelPlayer.karma || 'Not available', true)
		playerRich.addField('Client Version', hypixelPlayer.mcVersionRp || 'Not available', true)
		playerRich.addField('First Login', hypixelPlayer.firstLogin ? moment(hypixelPlayer.firstLogin).calendar() : 'Not available', true)
		playerRich.addField('Last Login', hypixelPlayer.lastLogin ? moment(hypixelPlayer.lastLogin).calendar() : 'Not available', true)

		let playerGuild

		let playerGuildID = (await HypixelClient.findGuild('member', hypixelPlayer.uuid)).guild

		if (playerGuildID) {
			playerGuild = (await HypixelClient.getGuild(playerGuildID)).guild
		}

		playerRich.addField('Guild', (playerGuild ? '[' + playerGuild.name + ' [' + playerGuild.tag + ']' + '](https://hypixel.net/guilds/' + playerGuild._id + '/)' : 'None'))

		message.channel.stopTyping()

		message.channel.send(playerRich)
	}
	else {
	}
}

module.exports.config = {
    name: "player",
    description: "",
    usage: "m.player someone",
    accessableby: "Members",
    aliases: []
}