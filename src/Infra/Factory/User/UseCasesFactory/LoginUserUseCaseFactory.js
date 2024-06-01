import LoginUserUseCase from '../../../../Application/UseCases/UserUseCases/LoginUserUseCase.js'
import BcryptService from '../../../Adapters/BcryptService.js'
import UserMySql from '../../../Repository/User/UserMySql.js'

export default class LoginUserUseCaseFactory {
  static create () {
    const userRepository = new UserMySql()
    const bcryptService = new BcryptService()
    return new LoginUserUseCase(userRepository, bcryptService)
  }
}
