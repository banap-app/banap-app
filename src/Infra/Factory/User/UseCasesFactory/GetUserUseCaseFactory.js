import GetUserUseCase from '../../../../Application/UseCases/UserUseCases/GetUserUseCase.js'
import UserMySql from '../../../Repository/User/UserMySql.js'

export default class GetUserUseCaseFactory {
  static create () {
    const userRepository = new UserMySql()
    return new GetUserUseCase(userRepository)
  }
}
