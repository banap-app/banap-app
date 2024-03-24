import User from '../../../Domain/Entities/User.js'
import UserRepository from '../../../Domain/Repositories/UserRepositories/UserRepository.js'
import UseCase from '../../__seedwork/Application/UseCase.js'
import EncryptionService from '../Adapters/EncryptionService.js'

/**
 * Classe UpdateUserUseCase
 *
 * Descrição:
 *   Esta classe representa o caso de uso para atualizar um usuário existente no sistema.
 */
export default class UpdateUserUseCase extends UseCase {
  /**
   * Construtor da classe UpdateUserUseCase
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

  /**
   * Classe interna OutputClass
   *
   * Descrição:
   *   Define a estrutura de dados de saída esperada pelo caso de uso.
   */
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
   *   Este método executa o caso de uso. Ele verifica se o e-mail fornecido já está em uso.
   *   Se o e-mail não estiver em uso, ele cria um novo usuário com os dados fornecidos e salva o usuário no repositório de usuários.
   *
   * @param {UpdateUserUseCase.InputClass} data Os dados de entrada para o caso de uso.
   *
   * @throws {Error} Lança um erro se os dados de entrada não forem uma instância de InputClass.
   *
   * @returns {UpdateUserUseCase.OutputClass} Retorna um objeto OutputClass indicando o sucesso ou falha da operação.
   */
  async execute (data) {
    if (!(data instanceof UpdateUserUseCase.InputClass)) {
      throw new Error('Data is not an instance of InputClass')
    }

    if (this.userRepository.findByEmail(data.email)) {
      return new UpdateUserUseCase.OutputClass(false, 'Email is being used')
    }

    const userRepository = await this.userRepository.find(data.id)

    if (!userRepository) {
      throw new Error('User not found')
    }

    const user = new User(data.name, data.password, data.email, '', true)
    this.userRepository.save(user)

    return new UpdateUserUseCase.OutputClass(true, 'User updated successfully')
  }
}
