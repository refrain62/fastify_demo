const Fastify = require("fastify");
const { test } = require("node:test");
const myPlugin = require("../plugin/myFirstPlugin");

test("Test the Plugin Route", async t => {
    // Create a mock fastify application to test the plugin
    const fastify = Fastify()

    fastify.register(myPlugin)

    // Add an endpoint of your choice
    fastify.get("/", async (request, reply) => {
        return ({ message: request.helloRequest })
    })

    // Use fastify.inject to fake a HTTP Request
    const fastifyResponse = await fastify.inject({
        method: "GET",
        url: "/"
    })

  console.log('status code: ', fastifyResponse.statusCode)
  console.log('body: ', fastifyResponse.body)
})
