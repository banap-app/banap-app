import { Router } from 'express'
import AnalysisController from '../../Controllers/Analysis/AnalysisController.js'
import AuthTokenMiddleware from '../Middlewares/AuthTokenMiddleware.js'
import HttpRequest from '../../Protocols/HttpRequest.js'

export default class AnalysisRouter {
  constructor (analysisController, authTokenMiddleware) {
    if (!(analysisController instanceof AnalysisController)) {
      throw new Error('analysisController must be an instance of AnalysisController')
    }
    if (!(authTokenMiddleware instanceof AuthTokenMiddleware)) {
      throw new Error('authTokenMiddleware must be an instance of AuthTokenMiddleware')
    }
    this.analysisController = analysisController
    this.authTokenMiddleware = authTokenMiddleware
    this.router = Router()
    this.initializeRoutes()
  }

  initializeRoutes () {
    this.router.post('/create', this.authTokenMiddleware.verifyToken.bind(this.authTokenMiddleware),async (req, res) => {
      try {
        const httpRequest = new HttpRequest(req)
        const result = await this.analysisController.handle(httpRequest)
        res.status(200).json(result)
      } catch (error) {
        return res.status(403).json({ error: error.message })
      }
    })
  }

  getRouter () {
    return this.router
  }
}
