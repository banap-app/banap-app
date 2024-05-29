import Auth from '../../../Domain/Entities/Auth.js'
import UseCase from '../../../__seedwork/Application/UseCase.js'
import TypeException from '../../../__seedwork/Domain/Exceptions/TypeException.js'
import AuthTokenService from '../../Adapters/AuthTokenService.js'

export default class GenerateAuthToken extends UseCase {
  constructor (tokenService) {
    super()
    if (!tokenService) {
      throw new Error('tokenService is required')
    }

    if (!(tokenService instanceof AuthTokenService)) {
      throw new TypeException(
        'tokenService must be an instance of AuthTokenService'
      )
    }

    this.tokenService = tokenService
  }

  static InputClass = class {
    constructor (userId) {
      if (!userId) {
        throw new TypeException('userId is required')
      }
      if (typeof userId !== 'string') {
        throw new TypeException('Must be a string')
      }
      this.userId = userId
    }
  }

  execute (payload) {
    if (!(payload instanceof GenerateAuthToken.InputClass)) {
      throw new TypeException(
        'payload must be an instance of GenerateAuthToken.InputClass'
      )
    }
    const auth = new Auth(payload.userId, payload.userId)
    const token = this.tokenService.generateToken(auth.get('token'))

    return token
  }
}
