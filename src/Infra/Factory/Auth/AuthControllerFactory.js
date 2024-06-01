import AuthController from '../../Http/Controllers/Auth/AuthController.js'
import GenerateAuthTokenFactory from './AuthTokenUseCases/GenerateAuthTokenFactory.js'
import VerifyAuthTokenFactory from './AuthTokenUseCases/verifyAuthTokenFactory.js'

export default class AuthControllerFactory {
  static create () {
    const generateAuthToken = GenerateAuthTokenFactory.create()
    const verifyAuthToken = VerifyAuthTokenFactory.create()
    return new AuthController(generateAuthToken, verifyAuthToken)
  }
}
