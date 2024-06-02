import GenerateAuthToken from '../../../../Application/UseCases/AuthUseCases/GenerateAuthToken.js'
import VerifyAuthToken from '../../../../Application/UseCases/AuthUseCases/VerifyAuthToken.js'
import TypeException from '../../../../__seedwork/Domain/Exceptions/TypeException.js'
import Controller from '../../../../__seedwork/Infra/Controller.js'

export default class AuthController extends Controller {
  constructor (generateAuthToken, verifyAuthToken) {
    super()
    if (!(generateAuthToken instanceof GenerateAuthToken)) {
      throw new TypeException(
        'generateAuthToken must be a GenerateAuthToken instance'
      )
    }

    if (!(verifyAuthToken instanceof VerifyAuthToken)) {
      throw new TypeException(
        'verifyAuthToken must be a VerifyAuthToken instance'
      )
    }

    this.generateAuthToken = generateAuthToken
    this.verifyAuthToken = verifyAuthToken
  }

  async handle (req, res, next) {
    return null
  }

  async verifyToken (httpRequest) {
    const payload = new VerifyAuthToken.InputClass(
      httpRequest.headers.authorization
    )
    const result = await this.verifyAuthToken.execute(payload)
    return result
  }

  async generateToken (httpRequest) {
    const payload = new GenerateAuthToken.InputClass(httpRequest.body.userId)
    const result = await this.generateAuthToken.execute(payload)
    return result
  }
}
