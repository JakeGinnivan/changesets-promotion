const cmd = require('node-cmd')

const runAsync = Promise.promisify(cmd.run, { multiArgs: true, context: cmd })
 
export async function getPublishState() {
    // Cannot get current publish state
    return
}

export async function publish(_pkg, tag) {
    try {
        await runAsync(`echo "Publishing version ${tag}"to ${process.env.TARGET_ENVIRONMENT}`)
    } catch (err) {
        console.error('Failed to publish', err)
        return { published: false }
    }

    return { published: true }
}