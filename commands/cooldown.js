const usedCommand = new Set();

module.exports.run = async (bot, message, args) => {
    if(usedCommand.has(message.author.id)){
        message.reply('you are on cooldown')
    } else {
        message.reply('Your not in a cooldown anymore.')
        
        
        usedCommand.add(message.author.id);
        setTimeout(() => {
            usedCommand.delete(message.author.id);
        }, 5000); 
    }
}

module.exports.config = {
    name: "cooldown",
    description: "yes",
    usage: "m.cooldown",
    accessableby: "Members",
    aliases: []
}