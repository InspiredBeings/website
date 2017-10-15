import { Route } from 'lexpress'

import WebsiteHomeController from './controllers/home'

const routes: Route[] = [
  {
    path: '/',
    Controller: WebsiteHomeController,
    method: 'get',
  },
]

export default routes
