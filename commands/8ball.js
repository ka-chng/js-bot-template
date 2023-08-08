exports.run = (client, message, args) => {

    let answers = [
        "this is it chief", "can i get an amen", "OwO", "UwU", "Indede, it is so", "yeet", "yes", `YES!! `, "that's absolutely correct",
        "i agree", "heeyy we have something in common", "Yeah, why not", "Only if you say please",

        "ask jack", "why are you asking me this", "with the way things are, who knows", "no clue :/", "not enough info", "i don't want to answer that", `idfk`,
        "you might wanna reconsider your life choices", "how about you watch anime instead", "ask juul", "if you pray hard enough",

        "nope", "ok", "leave me alone, i'm tired", "ask again in 5 minutes and if you dont get the answer you want read this message again", `u serious`,
        "how about you shut up", "simply put, no", "not gonna happen", "cool, now fuck off", "no",
    ];

    let answer = answers[Math.floor(Math.random() * answers.length)];

    if (args[0]) {
        message.channel.send(answer);
    } else {
        message.channel.send("give me a question so i can answer you");
    }
}

module.exports.config = {
    name: "8ball",
    description: "gives totally **random** answers",
    usage: "m.8ball <question>",
    accessableby: "Members",
    aliases: []
}