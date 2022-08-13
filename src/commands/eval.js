module.exports = {
  name: "eval",
  description: "A command responds with Pong [player name].",
  cooldown: 3,
  adminOnly: true,
  async execute(room, player, args) {
    try {
      // Evaluate (execute) our input
      var evaled = eval(args.join(" "));

      // Reply in the channel with our result
      room.sendAnnouncement(`${evaled}`);
    } catch (err) {
      // Handle error
      console.log(`${evaled}`);
    }
  },
};
