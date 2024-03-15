import DomainException from '../Exceptions/DomainException.js'

/**
 * Classe que representa uma senha.
 */
export default class Password {
  /**
   * Cria uma instância de Password.
   * @param {string} password - A senha a ser validada e armazenada.
   * @throws {DomainException} Lança uma exceção se a senha for menor que 8 caracteres ou não contiver pelo menos uma letra maiúscula e um número.
   */
  constructor (password) {
    if (password.length < 8) {
      throw new DomainException('Password must be at least 8 characters')
    }
    const regex = new RegExp(
      /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?|\-=\/~]+$/
    )

    if (!regex.test(password)) {
      throw new DomainException(
        'Password must contain at least one number and one uppercase letter'
      )
    }
    this.password = password
  }

  /**
   * Retorna a senha.
   * @returns {string} A senha.
   */
  toString () {
    return this.password
  }
}
