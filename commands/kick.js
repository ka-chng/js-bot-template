module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('KICK_MEMBERS'))
        message.channel.send("you cant kick members");
    else {
        let member = message.guild.members.cache.get(args);
        if(member) {
        try {
            await member.kick();
            console.log('kicked');
            message.channel.send(`${member}, kicked`)
        }
            catch(err) {
            console.log(err);
        }
    }
}
}

module.exports.config = {
    name: "kick",
    description: "kicks a a user from the guild",
    usage: "m.kick",
    accessableby: "Admins",
    aliases: []
}