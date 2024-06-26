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
          const result = await this.propertyController.handle(httpRequest)
          console.log(result)
          res.status(200).json(result)
        } catch (error) {
          console.log(error)
          res.status(500).json({ error: error.message })
        }
      }
    )

    this.router.get(
      '/allProperties',
      this.authTokenMiddleware.verifyToken.bind(this.authTokenMiddleware),
      async (req, res) => {
        try {
          const httpRequest = new HttpRequest(req)
          const result = await this.propertyController.handle(
            httpRequest
          )

          if (!result.success) {
            return res.status(404).json(result)
          }

          return res.status(200).json(result)
        } catch (error) {}
      }
    )

    this.router.get(
      '/getProperty/:propertyId',
      this.authTokenMiddleware.verifyToken.bind(this.authTokenMiddleware),
      async (req, res) => {
        try {
          const httpRequest = new HttpRequest(req)
          httpRequest.path = '/getProperty'
          const result = await this.propertyController.handle(
            httpRequest
          )
          if (!result.success) {
            return res.status(404).json(result)
          }
          return res.status(200).json(result)
        } catch (error) {}
      }
    )
  }

  getRouter () {
    return this.router
  }
}
