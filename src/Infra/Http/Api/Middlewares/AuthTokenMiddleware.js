import GenerateAuthToken from '../../../../Application/UseCases/AuthUseCases/GenerateAuthToken.js'
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
      const result = await this.authTokenController.verifyToken(req.httpRequest)
      if (!result.isValidToken) {
        return res.status(403).json(result)
      }
      req.httpRequest.body.ownerId = result.payloadDecoded
      next()
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  async gerenateToken (req, res) {
    try {
      req.httpRequest = new HttpRequest(req)
      const result = await this.authTokenController.generateToken(req.httpRequest)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(400).json(error)
    }
  }
}
