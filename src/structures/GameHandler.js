const { Collection } = require("@discordjs/collection");
const fs = require("fs");

class GameHandler {
  constructor(room) {
    this.room = room;
  }

  start() {
    this.room.setDefaultStadium("Big");
    this.room.setScoreLimit(5);
    this.room.setTimeLimit(0);
    // code your room in that class easily...
  }
}

module.exports = GameHandler;
