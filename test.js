const DiscordJS = require('discord.js')





module.exports = {
    callback: (message) => {
        const questions = [

            'What is you server IP (WITHOUT PORT)',
            'What is you server PORT',
            'What is you SteamID64'
        ]

        let counter = 0


const filter = m => m.author.id === message.author.id
const collector = new DiscordJS.Message.Collector(message.channel, filter, {
    max: questions.length,
    time: 1000 * 15 
})

message.channel.send(questions[counter++])
collector.on('collect', (m) => {
    if (counter < questions.length) {
m.channel.send(questions[counter++])
    }

})

collector.on('end', (collected) => {
    console.log(`Collected ${collected.size} messages`)

    let counter = 0
    collected.forEach((value) => {
        console.log(questions[counter++], value.content)
    })
})
},
}