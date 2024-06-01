import DeleteUserUseCase from '../../../../Application/UseCases/UserUseCases/DeleteUserUseCase.js'
import UserMySql from '../../../Repository/User/UserMySql.js'

export default class DeleteUserUseCaseFactory {
  static create () {
    const userRepository = new UserMySql()
    return new DeleteUserUseCase(userRepository)
  }
}
