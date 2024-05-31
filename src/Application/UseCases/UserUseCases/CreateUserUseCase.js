import User from '../../../Domain/Entities/User.js'
import UserRepository from '../../../Domain/Repositories/UserRepositories/UserRepository.js'
import UseCase from '../../../__seedwork/Application/UseCase.js'
import EncryptionService from '../../Adapters/EncryptionService.js'

/**
 * Classe CreateUserUseCase
 *
 * Descrição:
 *   Esta classe representa o caso de uso para criar um novo usuário no sistema.
 */
export default class CreateUserUseCase extends UseCase {
  /**
   * Construtor da classe CreateUserUseCase
   *
   * @param {UserRepository} userRepository Objeto que implementa a interface UserRepository para interagir com o armazenamento de usuários.
   * @param {EncryptionService} encryptionService Objeto que implementa a funcionalidade de criptografia de senha.
   *
   * @throws {Error} Lança um erro se userRepository ou encryptionService não forem fornecidos ou não forem do tipo esperado.
   */
  constructor (userRepository, encryptionService) {
    super()
    if (!userRepository || !(userRepository instanceof UserRepository)) {
      throw new Error('userRepository is required and must be an instance of UserRepository')
    }
    if (!encryptionService || !(encryptionService instanceof EncryptionService)) {
      throw new Error('encryptionService is required and must be an instance of EncryptionService')
    }

    this.userRepository = userRepository
    this.encryptionService = encryptionService
  }

  /**
   * Classe interna InputClass
   *
   * Descrição:
   *   Define a estrutura de dados de entrada esperada pelo caso de uso.
   */
  static InputClass = class {
    /**
     * Construtor da classe InputClass
     *
     * @param {Object} data Objeto contendo os dados do usuário.
     * @param {string} data.name Nome do usuário.
     * @param {string} data.email Endereço de e-mail do usuário.
     * @param {string} data.password Senha do usuário.
     */
    constructor (data) {
      this.name = data.name
      this.email = data.email
      this.password = data.password
    }
  }

  static OutputClass = class {
    /**
     * Construtor da classe OutputClass
     *
     * @param {boolean} success Indicador de sucesso.
     * @param {string} message Mensagem de erro.
     */
    constructor (success, message) {
      this.success = success
      this.message = message
    }
  }

  /**
   * Método execute
   *
   * Descrição:
   *   Executa o caso de uso para criar um novo usuário.
   *
   * @param {CreateUserUseCase.InputClass} data Instância da classe CreateUserUseCase.InputClass contendo os dados do usuário a ser criado.
   *
   * @returns {Promise<{ success: boolean, message: string }>} Uma promessa que resolve com um objeto contendo um indicador de sucesso e uma mensagem.
   *
   * @throws {Error} Lança um erro se os dados fornecidos não forem uma instância de InputClass.
   */
  async execute (data) {
    if (!(data instanceof CreateUserUseCase.InputClass)) {
      throw new Error('Data is not an instance of InputClass')
    }

    const emails = await this.userRepository.findByEmail(data.email)

    if (emails.length !== 0) {
      return new CreateUserUseCase.OutputClass(false, 'Email is being used')
    }

    data.passwordHash = await this.encryptionService.encrypt(data.password)
    const user = new User(data.name, data.password, data.email, '', true)
    user.set('password', data.passwordHash)
    const output = await this.userRepository.save(user)
    return new CreateUserUseCase.OutputClass(true, 'Success created user')
  }
}
