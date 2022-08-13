const { Collection } = require("@discordjs/collection");
const fs = require("fs");

class CommandHandler {
  constructor(room) {
    this.room = room;
    room.commands = new Collection();
    room.aliases = new Collection();
    room.cooldowns = new Collection();
  }

  start() {
    const commandFiles = fs
      .readdirSync("./src/commands")
      .filter((file) => file.endsWith(".js"));

    for (const file of commandFiles) {
      const command = require(`../commands/${file}`);

      if (!command.execute) {
        new Error(
          `[ERROR][COMMANDS]: 'execute' function is required for commands! (${file})`
        );
        process.exit();
      }

      if (!command.name || command.name === "") {
        new Error(
          `[ERROR][COMMANDS]: 'name' is required for commands! (${file})`
        );
        process.exit();
      }

      this.room.commands.set(command.name, command);

      command.aliases?.forEach((alias) => {
        this.room.aliases.set(alias, command.name);
      });

      if (!this.room.cooldowns.has(command.name)) {
        this.room.cooldowns.set(command.name, new Collection());
      }

      delete require.cache[file];
    }
  }
}

module.exports = CommandHandler;
