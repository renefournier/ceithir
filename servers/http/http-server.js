const fastify = require("fastify")({ logger: false });
const fetch = require("node-fetch");
const util = require("util");
const port = process.env.PORT || 5001;

fastify.register(require("fastify-cors"), {
  origin: ["http://localhost:5000"],
});

fastify.get("/", (request, reply) => {
  return reply.send({ hello: "world" });
});

fastify.listen(port, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server listening on ${address}:${port}`);
});
