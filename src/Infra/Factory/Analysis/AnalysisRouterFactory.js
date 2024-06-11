import AuthTokenMiddleware from '../../Http/Api/Middlewares/AuthTokenMiddleware.js'
import AnalysisRouter from '../../Http/Api/Routers/AnalysisRouter.js'
import AuthControllerFactory from '../Auth/AuthControllerFactory.js'
import AnalysisControllerFactory from './AnalysisControllerFactory.js'

export default class AnalysisRouterFactory {
  static create () {
    const analysisController = AnalysisControllerFactory.create()
    const authTokenMiddleware = new AuthTokenMiddleware(
      AuthControllerFactory.create()
    )
    return new AnalysisRouter(analysisController, authTokenMiddleware)
  }
}
