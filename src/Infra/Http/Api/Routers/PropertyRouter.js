import TypeException from '../../../../__seedwork/Domain/Exceptions/TypeException.js'
import PropertyController from '../../Controllers/Property/PropertyController.js'
import AuthTokenMiddleware from '../Middlewares/AuthTokenMiddleware.js'
import HttpRequest from '../../Protocols/HttpRequest.js'
import { Router } from 'express'

export default class PropertyRouter {
  constructor(propertyController, authTokenMiddleware) {
    if (!(propertyController instanceof PropertyController)) {
      throw new TypeException(
        'propertyController must be an instance of PropertyController'
      )
    }
    if (!(authTokenMiddleware instanceof AuthTokenMiddleware)) {
      throw new TypeException(
        'authTokenMiddleware must be an instance of AuthTokenMiddleware'
      )
    }

    this.authTokenMiddleware = authTokenMiddleware
    this.propertyController = propertyController
    this.router = Router()
    this.initializeRoutes()
  }

  initializeRoutes () {
    this.router.post(
      '/create',
      this.authTokenMiddleware.verifyToken.bind(this.authTokenMiddleware),
      async (req, res) => {
        try {
          const httpRequest = new HttpRequest(req)
          const result = await this.propertyController.create(httpRequest.body)
          res.status(200).json(result)
        } catch (error) {
          res.status(500).json({ error: error.message })
        }
      }
    )

    this.router.get(
      '/get/:id',
      this.authTokenMiddleware.verifyToken.bind(this.authTokenMiddleware),
      async (req, res) => {
        try {
          const httpRequest = new HttpRequest(req)
          const result = await this.propertyController.handle(
            httpRequest.params.id
          )
          if (!result.success) {
            return res.status(404).json(result)
          }
        } catch (error) {}
      }
    )
  }

  getRouter () {
    return this.router
  }
}
