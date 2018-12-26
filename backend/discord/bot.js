const {Client} = require('discord.js');
const client = new Client();
const logger = require('../logger');

const config = require('../config.json');
const discordConfig = config.discord;
const guildId = discordConfig.guild_id;

let guild;

client.on('ready', () => {
  guild = client.guilds.get(guildId);
  logger.registerChannels(guild);
  logger.info('Discord bot online', `Logged in as ${client.user.tag}`);
});

client.on('message', (msg) => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

/**
 * @return {Guild}
 */
function getGuild() {
  return guild;
}

client.login(process.env.DISCORD_TOKEN);

module.exports = {
  client: client,
  getGuild: getGuild,
};
