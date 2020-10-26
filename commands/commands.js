const { prefix } = require('../config.json');

module.exports = {
    name: 'commands',

    execute(message, args) {
        const data = [];
        const { commands } = message.client;

        if (!args.length) {
            data.push('Here\'s a list of all my commands:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nYou can send \`${prefix}commands [command name]\` to get info on a specific command!`);
        }
    },
};