import AuthTokenMiddleware from '../../Http/Api/Middlewares/AuthTokenMiddleware.js'
import PropertyRouter from '../../Http/Api/Routers/PropertyRouter.js'
import AuthControllerFactory from '../Auth/AuthControllerFactory.js'
import PropertyControllerFactory from './PropertyControllerFactory.js'

export default class PropertyRouterFactory {
  static create () {
    const propertyController = PropertyControllerFactory.create()
    const authTokenMiddleware = new AuthTokenMiddleware(AuthControllerFactory.create())

    return new PropertyRouter(propertyController, authTokenMiddleware)
  }
}
