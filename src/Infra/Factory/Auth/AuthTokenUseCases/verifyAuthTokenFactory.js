import VerifyAuthToken from '../../../../Application/UseCases/AuthUseCases/VerifyAuthToken.js'
import JwtService from '../../../Adapters/JwtService.js'

export default class VerifyAuthTokenFactory {
  static create () {
    const tokenService = new JwtService()
    return new VerifyAuthToken(tokenService)
  }
}
