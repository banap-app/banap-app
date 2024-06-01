import TypeException from '../../../../__seedwork/Domain/Exceptions/TypeException.js'
import AuthController from '../../Controllers/Auth/AuthController.js'
import HttpRequest from '../../Protocols/HttpRequest.js'

export default class AuthTokenMiddleware {
  constructor(authTokenController) {
    if (!(authTokenController instanceof AuthController)) {
      throw new TypeException(
        'authTokenController must be a instance of AuthController'
      )
    }
    this.authTokenController = authTokenController
  }

  async verifyToken (req, res, next) {
    try {
      req.httpRequest = new HttpRequest(req)
      const result = await this.authTokenController.handle(req.httpRequest)
      if (!result.isValidToken) {
        return res.status(403).json({ auth: false, message: result.message })
      }
      next()
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}
