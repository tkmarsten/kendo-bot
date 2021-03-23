const Discord = require('discord.js');

module.exports = {
    name: 'club',

    execute(mesage, args) {
        const embed = Discord.MessageEmbed()
            .setColor('#55aac9')
            .setTitle('Kendo Club at University of Washington')
            .setThumbnail('https://imgur.com/a/rwR5DOr')
            .addFields(
                { name: 'Advisor', value: 'Darrick Lew Sensei - Kendo 4 Dan, Iaido 3 Dan' },
                { name: 'President', value: 'Jane Higa' }
            );
    },
};