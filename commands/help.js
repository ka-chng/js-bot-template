const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('command panel')
        .setAuthor('jojo refrence')
        .setDescription('command help !')
        .setColor('#FF2D00')
        .addFields(
            { name: 'Fun', value: '8ball , dog , meme.', inline: true},

            { name: 'Random', value: 'hello , hi , info , memberinfo , uptime . ', inline: true},

        )
        .setTimestamp()


    message.channel.send(embed);
}


module.exports.config = {
    name: "help",
    description: "help",
    usage: "m.help",
    accessableby: "Members",
    aliases: []
}