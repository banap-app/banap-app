import express from 'express'
import UserController from '../../Controllers/User/UserController.js'
import HttpRequest from '../../Protocols/HttpRequest.js'
import AuthTokenMiddleware from '../Middlewares/AuthTokenMiddleware.js'

export default class UserRouter {
  constructor(userController, authTokenMiddleware) {
    if (!(userController instanceof UserController)) {
      throw new Error('userController must be an instance of UserController')
    }

    if (!(authTokenMiddleware instanceof AuthTokenMiddleware)) {
      throw new Error('authTokenMiddleware must be an instance of AuthTokenController')
    }

    this.userController = userController
    this.authTokenMiddleware = authTokenMiddleware
    this.router = express.Router()
    this.initializeRoutes()
  }

  initializeRoutes () {
    this.router.post('/create', /* this.authTokenMiddleware.verifyToken.bind(this.authTokenMiddleware), */ async (req, res) => {
      try {
        req.httpRequest = new HttpRequest(req)
        const result = await this.userController.handle(req.httpRequest)
        return res.status(200).json(result)
      } catch (error) {
        return res.status(500).json({ error: error.message + ' a' })
      }
    })
  }

  getRouter () {
    return this.router
  }
}
