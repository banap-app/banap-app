import AbstractError from './Exceptions/AbstractError.js'

/**
 * Classe abstrata que serve como base para outras classes.
 */
export default class Abstract {
  /**
   * Cria uma instância de Abstract.
   * @throws {AbstractError} Lança uma exceção se esta classe for instanciada diretamente.
   */
  constructor () {
    if (new.target === Abstract) {
      throw new AbstractError('Cannot instantiate abstract class directly.')
    }
    if (Object.getPrototypeOf(new.target.prototype).constructor === Abstract) {
      throw new AbstractError('Cannot instantiate abstract class directly.')
    }
  }
}
