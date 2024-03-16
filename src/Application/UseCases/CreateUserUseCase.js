import User from "../../Domain/Entities/User.js"

class CreateUserUseCase {
  constructor (userRepository) {
    if (userRepository === null || userRepository === undefined) {
      throw new Error('userRepository is required')
    }
    this.userRepository = userRepository
  }

  static InputClass = class {
    constructor (data) {
      this.name = data.name
      this.email = data.email
      this.password = data.password
    }
  }

  async execute(data) {
    if (!(data instanceof CreateUserUseCase.InputClass)) {
      throw new Error('Data is not an instance of InputClass')
    }
    let user = new User(data.name, data.password, data.email,"", true)
    console.log(user.to_dict())
    // Se data é uma instância de InputClass, continue com a lógica do execute

    /* const user = await this.userRepository.create(data)
      return user */
  }
}

// Exemplo de uso
const c = new CreateUserUseCase('a')
const inputData = {
  password: 'AsherNovelli150$',
  name: 'Asher',
  email: 'asher@example.com',
}
const inputInstance = new CreateUserUseCase.InputClass(inputData)

c.execute(inputInstance)
