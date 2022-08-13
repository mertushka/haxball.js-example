const config = require("../config.json");

module.exports = {
  name: "onPlayerChat",
  execute(room, player, message) {
    const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const roomPrefix = config.prefix;
    const prefix = new RegExp(`^(<@!?1>|${escapeRegex(roomPrefix)})\\s*`);

    if (!prefix.test(message)) return;

    const [, matchedPrefix] = message.match(prefix);
    const args = message.slice(matchedPrefix.length).trim().split(/ +/g);
    const cooldowns = room.cooldowns;
    const commandName = args.shift().toLowerCase();

    const command =
      room.commands.get(commandName) ||
      room.commands.find(
        (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
      );

    if (!command) return;

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = command.cooldown * 1000;

    if (command.adminOnly && player.admin !== true) {
      room.sendAnnouncement("Only admin can use it.", player.id);
      return false;
    }

    if (command.args && !args.length) {
      let reply = `You did not specify an argument!`;

      if (command.usage) {
        reply += `\nUsage: \`${prefix}${command.name} ${command.usage}\``;
      }

      room.sendAnnouncement(reply, player.id);
      return false;
    }

    if (timestamps.has(player.id)) {
      const expTime = timestamps.get(player.id) + cooldownAmount;

      if (now < expTime) {
        const timeleft = (expTime - now) / 1000;
        room.sendAnnouncement(
          `Please wait ${timeleft.toFixed(1)} seconds before you can use the ${
            command.name
          } command.`,
          player.id
        );
        return false;
      }
    }

    timestamps.set(player.id, now);
    setTimeout(() => timestamps.delete(player.id), cooldownAmount);

    try {
      command.execute(room, player, args);
      return false;
    } catch (error) {
      room.sendAnnouncement(
        "An error occurred while running the command, please contact the developers.",
        player.id
      );
      console.error(error);
      return false;
    }
  },
};
