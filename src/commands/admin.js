module.exports = {
  name: "admin",
  description: "A command for take admin.",
  cooldown: 3,
  execute(room, player, args) {
    return player.setAdmin(true);
  },
};
