/**
 * Classe TypeException
 *
 * Descrição:
 *   Esta classe representa uma exceção relacionada a tipos de dados.
 */
export default class TypeException extends Error {
  /**
   * Construtor da classe TypeException
   *
   * @param {string} message A mensagem de erro.
   */
  constructor (message) {
    // Chama o construtor da classe Error e define a mensagem de erro
    super(message)

    // Define o nome da exceção
    this.name = 'TypeException'
  }
}
