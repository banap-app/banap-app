import LoginUserUseCase from '../../../../Application/UseCases/UserUseCases/LoginUserUseCase.js'
import CreateUserUseCase from '../../../../Application/UseCases/UserUseCases/CreateUserUseCase.js'
import UseCase from '../../../../__seedwork/Application/UseCase.js'
import Controller from '../../../../__seedwork/Infra/Controller.js'
import GetUserUseCase from '../../../../Application/UseCases/UserUseCases/GetUserUseCase.js'

export default class UserController extends Controller {
  constructor (useCaseCreate, useCaseDelete, useCaseLogin, useCaseUpdate, useCaseGetUser) {
    super()
    if (!useCaseCreate) {
      throw new Error('useCaseCreate is required')
    }

    if (!useCaseDelete) {
      throw new Error('useCaseDelete is required')
    }

    if (!useCaseLogin) {
      throw new Error('useCaseLogin is required')
    }

    if (!useCaseUpdate) {
      throw new Error('useCaseUpdate is required')
    }

    if (
      !(useCaseCreate instanceof UseCase) ||
      !(useCaseDelete instanceof UseCase) ||
      !(useCaseLogin instanceof UseCase) ||
      !(useCaseUpdate instanceof UseCase) ||
      !(useCaseGetUser instanceof GetUserUseCase)
    ) {
      throw new Error('useCase must be an instance of UseCase')
    }

    this.useCaseCreate = useCaseCreate
    this.useCaseDelete = useCaseDelete
    this.useCaseLogin = useCaseLogin
    this.useCaseUpdate = useCaseUpdate
    this.useCaseGetUser = useCaseGetUser
  }

  async handle (httpRequest) {
    switch (httpRequest.method) {
      case 'POST':
        switch (httpRequest.path) {
          case '/create':
            return this.create(httpRequest.body)
          case '/login':
            return this.login(httpRequest.body)
          default:
            throw new Error(
              `Path ${httpRequest.path} is not allowed for method POST`
            )
        }
      case 'GET':
        switch (httpRequest.path) {
          case '/user/user':
            return await this.getUser(httpRequest.body)
          default:
            throw new Error(
              `Path ${httpRequest.path} is not allowed for method POST`
            )
        }
      default:
        throw new Error(`Method ${httpRequest.method} is not allowed`)
    }
  }

  create (data) {
    if (!data) {
      throw new Error('data is required')
    }

    const input = new CreateUserUseCase.InputClass(data)
    const output = this.useCaseCreate.execute(input)

    return output
  }

  async login (data) {
    if (!data) {
      throw new Error('data is required')
    }
    const input = new LoginUserUseCase.InputClass(data)
    const output = await this.useCaseLogin.execute(input)
    return output
  }

  async getUser (data) {
    if (!data) {
      throw new Error('data is required')
    }
    const input = new GetUserUseCase.InputClass(data.ownerId)
    const output = await this.useCaseGetUser.execute(input)
    return output
  }
}
