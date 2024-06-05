import UpdateUserUseCase from '../../../Application/UseCases/UserUseCases/UpdateUserUseCase.js'
import UserController from '../../Http/Controllers/User/UserController.js'
import CreateUserUseCaseFactory from './UseCasesFactory/CreateUserUseCaseFactory.js'
import DeleteUserUseCaseFactory from './UseCasesFactory/DeleteUserUseCaseFactory.js'
import GetUserUseCaseFactory from './UseCasesFactory/GetUserUseCaseFactory.js'
import LoginUserUseCaseFactory from './UseCasesFactory/LoginUserUseCaseFactory.js'
import UpdateUserUseCaseFactory from './UseCasesFactory/UpdateUserUseCaseFactory.js'

export class UserControllerFactory {
  static create () {
    const useCaseCreate = CreateUserUseCaseFactory.create()
    const useCaseDelete = DeleteUserUseCaseFactory.create()
    const useCaseLogin = LoginUserUseCaseFactory.create()
    const useCaseUpdate = UpdateUserUseCaseFactory.create()
    const useCaseGetUser = GetUserUseCaseFactory.create()

    return new UserController(
      useCaseCreate,
      useCaseDelete,
      useCaseLogin,
      useCaseUpdate,
      useCaseGetUser
    )
  }
}
