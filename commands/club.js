const Discord = require('discord.js');
const { color } = require('../config.json')

module.exports = {
    name: 'club',

    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setColor(color)
            .setTitle('Kendo Club at University of Washington')
            .setThumbnail('https://imgur.com/a/rwR5DOr')
            .addFields(
                { name: 'Advisor', value: 'Darrick Lew Sensei - Kendo 4 Dan, Iaido 3 Dan' },
                { name: 'President', value: 'Jane Higa' }
            );

        message.channel.send(embed)
    },
};