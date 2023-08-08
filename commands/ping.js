const Discord = require('discord.js')

module.exports.run = async (bot, message, args) =>{
    message.channel.send(`Pong!...`).then(msg =>{
        msg.edit(`fuck you Latency is ${msg.createdTimestamp - message.createdTimestamp}ms`)
    })
}

module.exports.config = {
    name: "ping",
    description: "",
    usage: "m.ping",
    accessableby: "Members",
    aliases: []
}