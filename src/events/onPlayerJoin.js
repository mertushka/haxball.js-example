module.exports = {
  name: "onPlayerJoin",
  execute(room, player) {
    room.sendAnnouncement(
      `Welcome to Haxball.JS Example Room!`,
      player.id,
      0xffffff,
      "italic",
      2
    );
  },
};
