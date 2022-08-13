module.exports = {
  name: "ping",
  description: "Pong!",
  execute(room, player) {
    return room.sendAnnouncement(`Pong!`, player.id);
  },
};
