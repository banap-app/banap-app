import DomainException from '../Exceptions/DomainException.js'

/**
 * Classe que representa o número de registro no CREA (Conselho Regional de Engenharia e Agronomia).
 */
export default class Crea {
  /**
   * Cria uma instância de Crea.
   * @param {number} crea - O número de registro no CREA.
   * @throws {DomainException} Lança uma exceção se o Crea não estiver definido, for menor que 10 caracteres ou não for um número.
   */
  constructor (crea) {
    if (crea === undefined) {
      throw new DomainException('Crea must be defined')
    }
    if (crea.length < 10) {
      throw new DomainException('Crea must be at least 10 characters')
    }
    if (typeof crea !== 'number') {
      throw new DomainException('Crea must be a number')
    }
    this.crea = crea
  }
}
