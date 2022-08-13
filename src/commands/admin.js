const config = require("../config.json");

module.exports = {
  name: "admin",
  description: "A command for take admin.",
  cooldown: 3,
  args: true,
  execute(room, player, args) {
    if (args[0] === config.admin_password)
      return room.setPlayerAdmin(player.id, !player.admin);
  },
};
