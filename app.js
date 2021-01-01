const Hapi = require('@hapi/hapi')
const Qs = require('qs')
const route = require('./routes')

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
  query: {
    parser: (query) => Qs.parse(query)
  }
})

server.route(route)

const init = async () => {
  await server.start()
  console.log('Fortune Footwears API running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log('Error occurred : ', err)
  process.exit(1)
})

init()
