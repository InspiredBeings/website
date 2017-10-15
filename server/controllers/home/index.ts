import { BaseController } from 'lexpress'

export default class HomeController extends BaseController {
  public get() {
    return this.res.status(200).render('home', {
      baseUrl: process.env.BASE_URL,
    })
  }
}
