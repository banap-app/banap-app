import AuthTokenMiddleware from '../../Http/Api/Middlewares/AuthTokenMiddleware.js'
import UserRouter from '../../Http/Api/Routers/UserRouter.js'
import AuthControllerFactory from '../Auth/AuthControllerFactory.js'
import { UserControllerFactory } from './UserControllerFactory.js'

export default class UserRouterFactory {
  static create () {
    const userController = UserControllerFactory.create()
    const authTokenMiddleware = new AuthTokenMiddleware(AuthControllerFactory.create())

    return new UserRouter(userController, authTokenMiddleware)
  }
}
