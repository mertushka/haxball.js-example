const fs = require("fs");

class EventHandler {
  constructor(room) {
    this.room = room;
  }

  start() {
    const eventFiles = fs
      .readdirSync("./src/events")
      .filter((file) => file.endsWith(".js"));

    for (const file of eventFiles) {
      const event = require(`../events/${file}`);
      this.room[event.name] = (...args) => event.execute(this.room, ...args);
    }
  }
}

module.exports = EventHandler;
