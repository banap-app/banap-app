import DomainException from '../Exceptions/DomainException.js'

/**
 * Classe DomainValidator
 *
 * Descrição:
 *   Esta classe fornece métodos de validação para domínios no contexto do domínio de negócios.
 */
export default class DomainValidator {
  /**
   * Método str_validate_length
   *
   * Descrição:
   *   Valida o comprimento de uma string de domínio.
   *
   * @param {string} domain A string de domínio a ser validada.
   * @param {number} strMax O comprimento máximo permitido para a string de domínio.
   *
   * @throws {DomainException} Lança uma exceção se strMax não for um número.
   * @throws {DomainException} Lança uma exceção se o comprimento da string de domínio exceder strMax.
   */

  static str_validate_length (domain, strMax) {
    if (typeof strMax !== 'number') {
      throw new TypeError('Must be a number')
    }

    if (domain.length > strMax) {
      throw new DomainException('Domain is too long')
    }
  }

  /**
   * Método str_is_not_empty
   *
   * Descrição:
   *   Valida se uma string de domínio não está vazia.
   *
   * @param {string} domain A string de domínio a ser validada.
   *
   * @throws {DomainException} Lança uma exceção se a string de domínio estiver vazia.
   */

  static str_is_not_empty (domain) {
    if (domain.length === 0) {
      throw new DomainException(`Prop is required`)
    }
  }
}
