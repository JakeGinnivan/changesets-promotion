const cmd = require("node-cmd");

const runAsync = Promise.promisify(cmd.run, { multiArgs: true, context: cmd });

module.exports = {
  async getPublishState() {
    // Cannot get current publish state
    return;
  },
  async publish(_pkg, tag) {
    try {
      await runAsync(
        `echo "Publishing version ${tag}"to ${process.env.TARGET_ENVIRONMENT}`
      );
    } catch (err) {
      console.error("Failed to publish", err);
      return { published: false };
    }

    return { published: true };
  },
};
