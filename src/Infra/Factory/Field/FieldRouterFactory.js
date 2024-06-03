import AuthTokenMiddleware from '../../Http/Api/Middlewares/AuthTokenMiddleware.js'
import FieldRouter from '../../Http/Api/Routers/FieldRouter.js'
import AuthControllerFactory from '../Auth/AuthControllerFactory.js'
import FieldControllerFactory from './FieldControllerFactory.js'

export default class FieldRouterFactory {
  static create () {
    const fieldController = FieldControllerFactory.create()
    const authTokenMiddleware = new AuthTokenMiddleware(
      AuthControllerFactory.create()
    )
    return new FieldRouter(fieldController, authTokenMiddleware)
  }
}
