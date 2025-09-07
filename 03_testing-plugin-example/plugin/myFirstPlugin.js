const fP = require("fastify-plugin")

async function myPlugin(fastify, options) {
    fastify.decorateRequest("helloRequest", "Hello World")
    fastify.decorate("helloInstance", "Hello Fastify Instance")
}

module.exports = fP(myPlugin)
