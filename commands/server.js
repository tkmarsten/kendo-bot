module.exports = {
    name: 'server',
    description: 'Display server name',
    execute(message, args) {
        message.channel.send(`Server name: ${message.guild.name}`);
    },
};