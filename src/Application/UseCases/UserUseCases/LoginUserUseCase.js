import UseCase from '../../../__seedwork/Application/UseCase.js'
import UserRepository from '../../../Domain/Repositories/UserRepositories/UserRepository.js'
import EncryptionService from '../../Adapters/EncryptionService.js'

/**
 * Classe LoginUserUseCase
 *
 * Descrição:
 *   Esta classe representa o caso de uso para autenticar um usuário existente no sistema.
 */
export default class LoginUserUseCase extends UseCase {
  /**
   * Construtor da classe LoginUserUseCase
   *
   * @param {UserRepository} userRepository Objeto que implementa a interface UserRepository para interagir com o armazenamento de usuários.
   * @param {EncryptionService} encryptionService Objeto que implementa a funcionalidade de verificação de senha.
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
     * @param {string} data.email Endereço de e-mail do usuário.
     * @param {string} data.password Senha do usuário.
     */
    constructor (data) {
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
     * @param {Object} data Objeto contendo os dados de saída.
     * @param {boolean} data.success Indicador de sucesso.
     * @param {string} data.message Mensagem de erro ou sucesso.
     * @param {Object} data.user Objeto do usuário autenticado.
     */
    constructor (data) {
      this.success = data.success
      this.message = data.message
      this.user = data.user
    }
  }

  /**
   * Método execute
   *
   * Descrição:
   *   Este método executa o caso de uso. Ele verifica se o e-mail fornecido existe no repositório de usuários.
   *   Se o e-mail existir, ele verifica se a senha fornecida corresponde à senha do usuário.
   *   Se a senha corresponder, ele retorna um objeto OutputClass indicando o sucesso do login e o usuário autenticado.
   *
   * @param {LoginUserUseCase.InputClass} data Os dados de entrada para o caso de uso.
   *
   * @throws {Error} Lança um erro se os dados de entrada não forem uma instância de InputClass.
   *
   * @returns {LoginUserUseCase.OutputClass} Retorna um objeto OutputClass indicando o sucesso ou falha da operação.
   */
  async execute (data) {
    if (!(data instanceof LoginUserUseCase.InputClass)) {
      throw new Error('Data is not an instance of InputClass')
    }

    const user = await this.userRepository.findByEmail(data.email)

    if (!user) {
      return new LoginUserUseCase.OutputClass(false, 'Email not found')
    }

    if (!user.active) {
      return new LoginUserUseCase.OutputClass(false, 'User not active')
    }

    if (this.encryptionService.verifyPasswords(user.password, data.password)) {
      return new LoginUserUseCase.OutputClass(false, 'Password incorrect')
    }

    return new LoginUserUseCase.OutputClass(
      true,
      'Login successful',
      user
    )
  }
}
