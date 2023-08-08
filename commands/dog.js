const Discord = require('discord.js');
const request = require('request');

exports.run = (client, message, args) => {
    let url = 'https://random.dog/woof.json';
    try {
        request({
            url: url,
            json: true
        }, function (error, response, body) {

            if (!error && response.statusCode === 200) {
                message.channel.send(body.url);
                console.log(body.url);
            }
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports.config = {
    name: "dog",
    description: "",
    usage: "m.dog",
    accessableby: "Members",
    aliases: []
}