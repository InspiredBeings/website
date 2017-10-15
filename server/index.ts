import { Lexpress } from 'lexpress'

import routes from './routes'

const lexpress = new Lexpress({
  routes
})

lexpress.start()
