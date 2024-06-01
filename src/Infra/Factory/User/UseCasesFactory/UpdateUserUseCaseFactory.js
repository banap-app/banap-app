import UpdateUserUseCase from '../../../../Application/UseCases/UserUseCases/UpdateUserUseCase.js'
import BcryptService from '../../../Adapters/BcryptService.js'
import UserMySql from '../../../Repository/User/UserMySql.js'

export default class UpdateUserUseCaseFactory {
  static create () {
    const userRepository = new UserMySql()
    const bcryptService = new BcryptService()
    return new UpdateUserUseCase(userRepository, bcryptService)
  }
}
