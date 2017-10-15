import { Lexpress } from 'lexpress'
import * as fs from 'fs'


import routes from './routes'

const lexpress = new Lexpress({
  https: {
    cert: fs.readFileSync('../server.crt', 'utf8'),
    key: fs.readFileSync('../server.key', 'utf8'),
  },
  routes,
})

lexpress.start()
