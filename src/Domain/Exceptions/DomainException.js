/**
 * Classe que representa uma exceção do domínio.
 * Esta classe estende a classe Error.
 */
export default class DomainException extends Error {
  /**
   * Cria uma instância de DomainException.
   * @param {string} message - A mensagem de erro associada à exceção.
   */
  constructor (message) {
    super(message)
    this.name = 'DomainException'
  }
}
