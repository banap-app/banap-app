import Auth from '../../../Domain/Entities/Auth.js'
import UseCase from '../../../__seedwork/Application/UseCase.js'
import TypeException from '../../../__seedwork/Domain/Exceptions/TypeException.js'
import AuthTokenService from '../../Adapters/AuthTokenService.js'
import pkg from 'jsonwebtoken'

export default class VerifyAuthToken extends UseCase {
  constructor(tokenService) {
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
    constructor (token) {
      if (!token) {
        throw new Error('token is required')
      }
      this.token = token
    }
  }

  static OutputClass = class {
    constructor (isValidToken, message) {
      this.isValidToken = isValidToken
      this.message = message
    }
  }

  async execute (payload) {
    if (!(payload instanceof VerifyAuthToken.InputClass)) {
      throw new TypeException(
        'payload must be an instance of VerifyAuthToken.InputClass'
      )
    }

    const auth = new Auth(payload.token, payload.token)
    try {
      const isValidToken = await this.tokenService.verifyToken(auth.get('token')).payload
      return new VerifyAuthToken.OutputClass(true, isValidToken)
    } catch (e) {
      return new VerifyAuthToken.OutputClass(false, "Need login again")
    }
  }
}
