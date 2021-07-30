module.exports = {
  name: "ping",
  description: "A command responds with Pong [player name].",
  cooldown: 3,
  execute(room, player) {
    return room.send(`Pong ${player.name}`);
  },
};
