import build from './src/app'

const PORT = process.env.PORT || 5000

const server = build({
  logger: {
    level: 'info',
    prettyPrint: true,
  },
})

const start = async () => {
  try {
    await server.listen(PORT)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
