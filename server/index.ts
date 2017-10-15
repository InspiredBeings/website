import { Lexpress } from 'lexpress'
// import * as fs from 'fs'


import routes from './routes'

const lexpress = new Lexpress({
  routes,
})

lexpress.start()
