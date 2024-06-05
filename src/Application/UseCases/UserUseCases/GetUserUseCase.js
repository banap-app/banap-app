import UseCase from '../../../__seedwork/Application/UseCase.js'
import User from '../../../Domain/Entities/User.js'
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
    constructor (success, message, name, email, createdAt, active) {
      this.success = success
      this.message = message
      this.name = name
      this.email = email
      this.createdAt = createdAt
      this.active = active
    }
  }

  async execute (data) {
    if (!(data instanceof GetUserUseCase.InputClass)) {
      throw new Error('Data is not an instance of InputClass')
    }
    const userFind = await this.userRepository.findById(data.userId)
    const createdAt = userFind[0].created_at
    return new GetUserUseCase.OutputClass(true, 'User finded', userFind[0].name_user, userFind[0].email, createdAt, userFind[0].active)
}
}