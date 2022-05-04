import fastify from 'fastify'

export const build = (opts = {}) => {
  const app = fastify(opts)

  app.get('/', (request, reply) => {
    reply.code(200).send({
      hello: 'world!',
    })
  })

  return app
}
