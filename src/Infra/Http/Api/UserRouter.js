import express from 'express'
import UserController from '../Controllers/User/UserController.js'

export default class UserRouter {
  constructor(userController) {
    if (!(userController instanceof UserController)) {
      throw new Error('userController must be an instance of UserController')
    }

    this.userController = userController
    this.router = express.Router()
    this.initializeRoutes()
  }

  initializeRoutes () {
    this.router.post('/', this.adaptRequest.bind(this), async (req, res) => {
      try {
        const result = await this.userController.handle(req.httpRequest)
        res.status(200).json(result)
      } catch (error) {
        res.status(500).json({ error: error.message })
      }
    })
  }

  adaptRequest (req, res, next) {
    req.httpRequest = {
      body: req.body,
      method: req.method,
      path: req.path,
      query: req.query,
      params: req.params,
      headers: req.headers
    }
    next()
  }

  getRouter () {
    return this.router
  }
}