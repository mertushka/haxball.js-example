module.exports = {
  name: "ready",
  once: true,
  execute(room, link) {
    console.log(`Room is ready! Link: ${link}`);
  },
};
