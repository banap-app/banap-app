import { Router } from 'express'
import UserController from '../../Controllers/User/UserController.js'
import HttpRequest from '../../Protocols/HttpRequest.js'
import AuthTokenMiddleware from '../Middlewares/AuthTokenMiddleware.js'

export default class UserRouter {
  constructor (userController, authTokenMiddleware) {
    if (!(userController instanceof UserController)) {
      throw new Error('userController must be an instance of UserController')
    }

    if (!(authTokenMiddleware instanceof AuthTokenMiddleware)) {
      throw new Error('authTokenMiddleware must be an instance of AuthTokenController')
    }

    this.userController = userController
    this.authTokenMiddleware = authTokenMiddleware
    this.router = Router()
    this.initializeRoutes()
  }

  initializeRoutes () {
    this.router.post('/create', async (req, res) => {
      try {
        req.httpRequest = new HttpRequest(req)
        const result = await this.userController.handle(req.httpRequest)
        return res.status(200).json(result)
      } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
      }
    })

    this.router.post('/login', async (req, res, next) => {
      try {
        req.httpRequest = new HttpRequest(req)
        const result = await this.userController.handle(req.httpRequest)

        req.body = { ...req.httpRequest.body, userId: result.userId }

        if (!result.success) {
          return res.status(404).json(result)
        }

        next()
      } catch (error) {
        return res.status(500).json({ error: error.message })
      }
    }, async (req, res) => await this.authTokenMiddleware.gerenateToken(req, res))
  }

  getRouter () {
    return this.router
  }
}
