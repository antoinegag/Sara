const {RichEmbed} = require('discord.js');

const config = require('./config.json');
const discordConfig = config.discord;
const enabled = discordConfig.logs.enabled;
const errorChannelId = discordConfig.logs.error;
const infoChannelId = discordConfig.logs.info;
const warnChannelId = discordConfig.logs.warning;

let errorChannel;
let infoChannel;
let warnChannel;

const ERROR_COLOR = 0xFF0000;
const INFO_COLOR = 0x008000;
const WARN_COLOR = 0xFFA500;

/**
 * Register log channels
 * @param {Guild} guild
 */
function registerChannels(guild) {
  errorChannel = guild.channels.get(errorChannelId);
  infoChannel = guild.channels.get(infoChannelId);
  warnChannel = guild.channels.get(warnChannelId);
}

/**
 * Sends an info log
 * @param {string} title
 * @param {string} message
 */
function info(title, message) {
  if (!infoChannel || !enabled) {
    console.log(`[INFO] ${title} ${message ? message : ''}`);
    return;
  }
  const embed = new RichEmbed()
      .setColor(INFO_COLOR)
      .setTitle(title)
      .setTimestamp(new Date());

  if (message) {
    embed.setDescription(message);
  }
  infoChannel.send(embed);
}

/**
 * @param {string} title
 * @param {string} message
 */
function warn(title, message) {
  if (!warnChannel || !enabled) {
    console.log(`[WARN] ${title} ${message ? message : ''}`);
    return;
  }
  const embed = new RichEmbed()
      .setColor(WARN_COLOR)
      .setTitle(title)
      .setTimestamp(new Date());

  if (message) {
    embed.setDescription(message);
  }
  warnChannel.send(embed);
}

/**
 * @param {string} title
 * @param {string} message
 */
function error(title, message) {
  if (!errorChannel || !enabled) {
    console.log(`[ERROR] ${title} ${message ? message : ''}`);
    return;
  }
  const embed = new RichEmbed()
      .setColor(ERROR_COLOR)
      .setTitle(title)
      .setTimestamp(new Date());

  if (message) {
    embed.setDescription(message);
  }
  errorChannel.send(embed);
}

module.exports = {
  registerChannels: registerChannels,
  info: info,
  warn: warn,
  error: error,
};
