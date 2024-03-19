import Abstract from '../../../__seedwork/Abstract.js'
import User from '../../Entities/User.js'
import DomainException from '../../Exceptions/DomainException.js'

/**
 * Classe UserRepository
 *
 * Descrição:
 *   Esta classe é responsável por interagir com o armazenamento de usuários,
 *   incluindo operações como salvar, atualizar e buscar usuários.
 */
export default class UserRepository extends Abstract {
  /**
   * Método save
   *
   * Descrição:
   *   Salva um usuário no armazenamento.
   *
   * @param {User} user Objeto que representa o usuário a ser salvo.
   * @returns {User} O usuário salvo.
   *
   * @throws {DomainException} Lança uma exceção se user não for uma instância de User.
   */

  save (user) {
    if (!(user instanceof User)) {
      throw new DomainException('Must be a User')
    }
    // Lógica para salvar o usuário
    return user
  }

  /**
   * Método update
   *
   * Descrição:
   *   Atualiza um usuário no armazenamento.
   *
   * @param {User} user Objeto que representa o usuário a ser atualizado.
   * @returns {User} O usuário atualizado.
   *
   * @throws {DomainException} Lança uma exceção se user não for uma instância de User.
   */

  update (user) {
    if (!(user instanceof User)) {
      throw new DomainException('Must be a User')
    }
    // Lógica para atualizar o usuário
    return user
  }

  /**
   * Método findByEmail
   *
   * Descrição:
   *   Busca um usuário pelo endereço de e-mail.
   *
   * @param {string} email Endereço de e-mail do usuário a ser encontrado.
   *
   * @throws {DomainException} Lança uma exceção se email não for uma string.
   */

  findByEmail (email) {
    if (typeof email !== 'string') {
      throw new DomainException('Email must be a string')
    }
    // Lógica para buscar o usuário pelo e-mail
  }
}
