import GenerateAuthToken from '../../../../Application/UseCases/AuthUseCases/GenerateAuthToken.js'
import JwtService from '../../../Adapters/JwtService.js'

export default class GenerateAuthTokenFactory {
  static create () {
    const tokenService = new JwtService()
    return new GenerateAuthToken(tokenService)
  }
}
