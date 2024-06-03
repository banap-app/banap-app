import { Router } from 'express'
import FieldController from '../../Controllers/Field/FieldController.js'
import AuthTokenMiddleware from '../Middlewares/AuthTokenMiddleware.js'
import HttpRequest from '../../Protocols/HttpRequest.js'

export default class FieldRouter {
  constructor(fieldController, authTokenMiddleware) {
    if (!(fieldController instanceof FieldController)) {
      throw new Error('fieldController must be an instance of FieldController')
    }

    if (!(authTokenMiddleware instanceof AuthTokenMiddleware)) {
      throw new Error(
        'authTokenMiddleware must be an instance of AuthTokenMiddleware'
      )
    }

    this.fieldController = fieldController
    this.authTokenMiddleware = authTokenMiddleware
    this.router = Router()
    this.initializeRoutes()
  }

  initializeRoutes () {
    this.router.post(
      '/create',
      this.authTokenMiddleware.verifyToken.bind(this.authTokenMiddleware),
      async (req, res) => {
        console.log('create')
        try {
          const httpRequest = new HttpRequest(req)
          const result = await this.fieldController.handle(httpRequest)
          res.status(200).json(result)
        } catch (error) {
          return res.status(403).json({ error: error.message })
        }
      }
    )
  }

  getRouter () {
    return this.router
  }
}
