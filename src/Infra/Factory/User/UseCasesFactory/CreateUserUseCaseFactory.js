import CreateUserUseCase from '../../../../Application/UseCases/UserUseCases/CreateUserUseCase.js'
import BcryptService from '../../../Adapters/BcryptService.js'
import UserMySql from '../../../Repository/User/UserMySql.js'

export default class CreateUserUseCaseFactory {
  static create () {
    const userRepository = new UserMySql()
    const bcryptService = new BcryptService()
    return new CreateUserUseCase(userRepository, bcryptService)
  }
}
