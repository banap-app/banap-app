import DomainException from '../Exceptions/DomainException.js'

/**
 * Classe que representa um endereço de email.
 */
export default class Email {
  /**
   * Cria uma instância de Email.
   * @param {string} email - O endereço de email a ser validado e armazenado.
   * @throws {DomainException} Lança uma exceção se o email não estiver definido, for menor que 5 caracteres, não contiver '@' ou '.' ou se a posição do último '.' não estiver definida.
   */
  constructor (email) {
    if (email.length === 0 || email === '') {
      throw new DomainException('Email is required')
    }
    if (email.length < 5) {
      throw new DomainException('Email is not valid')
    }
    if (email[email.lastIndexOf('.') + 1] === undefined) {
      throw new DomainException('Email is not valid')
    }
    if (!email.includes('@')) {
      throw new DomainException('Email is not valid')
    }
    if (!email.includes('.')) {
      throw new DomainException('Email is not valid')
    }
    this.email = email
  }

  /**
   * Retorna o endereço de email.
   * @returns {string} O endereço de email.
   */
  toString () {
    return this.email
  }
}
