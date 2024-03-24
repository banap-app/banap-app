import UserRepository from '../../../Domain/Repositories/UserRepositories/UserRepository'
import UseCase from '../../../__seedwork/Application/UseCase'

/**
 * Classe DeleteUserUseCase
 *
 * Descrição:
 *   Esta classe representa o caso de uso para excluir um usuário existente no sistema.
 */
export default class DeleteUserUseCase extends UseCase {
  /**
   * Construtor da classe DeleteUserUseCase
   *
   * @param {UserRepository} userRepository Objeto que implementa a interface UserRepository para interagir com o armazenamento de usuários.
   *
   * @throws {Error} Lança um erro se userRepository não for fornecido ou não for do tipo esperado.
   */
  constructor (userRepository) {
    super()
    if (!userRepository || !(userRepository instanceof UserRepository)) {
      throw new Error('userRepository is required and must be an instance of UserRepository')
    }
    this.userRepository = userRepository
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
     * @param {string} data.id ID do usuário.
     */
    constructor ({ id }) {
      this.id = id
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
     * @param {Object} data.user Objeto do usuário excluído.
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
   *   Este método executa o caso de uso. Ele verifica se o ID do usuário fornecido existe no repositório de usuários.
   *   Se o usuário existir, ele exclui o usuário do repositório de usuários.
   *   Se a exclusão for bem-sucedida, ele retorna um objeto OutputClass indicando o sucesso da operação e o usuário excluído.
   *
   * @param {DeleteUserUseCase.InputClass} data Os dados de entrada para o caso de uso.
   *
   * @throws {Error} Lança um erro se os dados de entrada não forem uma instância de InputClass.
   *
   * @returns {DeleteUserUseCase.OutputClass} Retorna um objeto OutputClass indicando o sucesso ou falha da operação.
   */
  async execute (data) {
    if (!(data instanceof DeleteUserUseCase.InputClass)) {
      throw new Error('Data is not an instance of InputClass')
    }

    const user = await this.userRepository.find(data.id)
    if (!user) {
      return new DeleteUserUseCase.OutputClass(false, 'User not found')
    }

    this.userRepository.delete(user)

    return new DeleteUserUseCase.OutputClass(
      true,
      'User deleted successfully',
      user
    )
  }
}
