exports.run = (client, message, args) => {

    var milliseconds = parseInt((client.uptime % 1000) / 100),
        seconds = parseInt((client.uptime / 1000) % 60),
        minutes = parseInt((client.uptime / (1000 * 60)) % 60),
        hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    message.channel.send("i've been running for "  + hours + " hours, " + minutes + " minutes and " + seconds + "." + milliseconds + " second ");
}

module.exports.config = {
    name: "uptime",
    description: "shows you how lomg i've been online",
    usage: "m.uptime",
    accessableby: "Members",
    aliases: []
}