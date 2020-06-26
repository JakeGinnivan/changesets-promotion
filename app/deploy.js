const cmd = require("node-cmd");
const { promisify } = require('util')

const getAsync = promisify(cmd.get, { multiArgs: true, context: cmd });

module.exports = {
  async getPublishState() {
    // Cannot get current publish state
    return;
  },
  async publish(_pkg, tag) {
    try {
      const data = await getAsync(
        `echo "Publishing version ${tag} to ${process.env.TARGET_ENVIRONMENT}"`
      );
      console.log('Publish log', data)
    } catch (err) {
      console.error("Failed to publish", err);
      return { published: false };
    }

    return { published: true };
  },
};
