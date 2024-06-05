import UseCase from '../../../__seedwork/Application/UseCase.js'
import UserRepository from '../../../Domain/Repositories/UserRepositories/UserRepository.js'

export default class GetUserUseCase extends UseCase {
  constructor (userRepository) {
    super()
    if (!(userRepository instanceof UserRepository)) {
      throw new Error('userRepository is required')
    }
    this.userRepository = userRepository
  }

  static InputClass = class {
    constructor (userId) {
      this.userId = userId
    }
  }

  static OutputClass = class {
    constructor (user) {
      this.user = user
    }
  }

  async execute (data) {
    if (!(data instanceof GetUserUseCase.InputClass)) {
      throw new Error('Data is not an instance of InputClass')
    }
    const user = await this.userRepository.findById(data.userId)
    return new GetUserUseCase.OutputClass(user)
  }
}
