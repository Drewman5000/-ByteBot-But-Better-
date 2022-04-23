require('dotenv').config();
const { Client, Intents } = require('discord.js');
const TOKEN = process.env.TOKEN;

// instantiate new client
const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

// When client is ready, run this code
client.once('ready', () => {
    console.log('Ready!');
});

client.on('interactionsCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    } else if (commandName === 'server') {
        await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}.`);
    } else if (commandName === 'user') {
        await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
    }
});

// Login to Discord with client token
client.login(TOKEN);