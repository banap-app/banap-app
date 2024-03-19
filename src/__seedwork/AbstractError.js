/**
 * Classe AbstractError
 *
 * Descrição:
 *   Esta classe representa um erro abstrato.
 */
export default class AbstractError extends Error {
  /**
   * Construtor da classe AbstractError
   *
   * @param {string} message A mensagem de erro.
   */
  constructor (message) {
    // Chama o construtor da classe Error e define a mensagem de erro
    super(message)

    // Define o nome do erro
    this.name = 'AbstractError'
  }
}
