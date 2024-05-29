import { v4, validate as validateUuid } from 'uuid'
import Email from '../ValueObject/Email.js'
import DomainValidator from '../Validators/DomainValidator.js'
import Password from '../ValueObject/Password.js'
import TypeException from '../../__seedwork/Domain/Exceptions/TypeException.js'
import Entity from '../../__seedwork/Domain/Entity.js'

/**
 * @typedef {Object} PrivateProperties - Definição das propriedades privadas da classe User
 * @property {UUID} id - O ID do usuário
 * @property {string} name - O nome do usuário
 * @property {string} password - A senha do usuário
 * @property {string} email - O email do usuário
 */

/**
 * Classe que representa um usuário no sistema.
 */
export default class User extends Entity {
  /**
   * @type {PrivateProperties}
   */
  #props

  /**
   * Cria uma instância de User.
   * @param {string} name - O nome do usuário
   * @param {string} password - A senha do usuário
   * @param {string} email - O email do usuário
   * @param {UUID} id - O uid do usuário
   * @param {boolean} active - O estado de ativação do usuário
   */
  constructor (name, password, email, id, active) {
    super()
    this.#props = {
      id: id ? id : v4(),
      name,
      password: new Password(password).toString(),
      email: new Email(email).toString(),
      created_at: new Date().toISOString(),
      active
    }
    this.validate()
  }

  /**
   * Obtém o valor da propriedade privada especificada.
   * @param {string} propName - O nome da propriedade privada a ser acessada
   * @returns {string} O valor da propriedade privada
   */
  get (propName) {
    return this.#props[propName]
  }

  set (propName, value) {
    this.#props[propName] = value
  }

  /**
   * Converte as propriedades do usuário em um dicionário.
   * @returns {object} Um dicionário contendo todas as propriedades do usuário.
   */
  to_dict () {
    return super.to_dict(this.#props)
  }

  deactivate () {
    this.#props.active = false
  }

  activate () {
    this.#props.active = true
  }

  /**
   * Valida as propriedades da instância de User.
   * @throws {TypeException} Lança uma exceção se alguma propriedade não estiver no formato correto.
   * @throws {Error} Lança uma exceção se o ID não for um UUID válido.
   */
  validate () {
    if (typeof this.get('name') !== 'string') {
      throw new TypeException('Name must be a string')
    }

    if (typeof this.get('created_at') !== 'string') {
      throw new TypeException('CreateAt must be a string')
    }

    if (typeof this.get('password') !== 'string') {
      throw new TypeException('Password must be a string')
    }
    if (typeof this.get('email') !== 'string') {
      throw new TypeException('Email must be a string')
    }

    if (!validateUuid(this.get('id'))) {
      throw new TypeException('ID must be a valid UUID')
    }
    if (typeof this.get('active') !== 'boolean') {
      throw new TypeException('Active must be a boolean')
    }
    DomainValidator.str_is_not_empty(this.get('name'))
    DomainValidator.str_is_not_empty(this.get('password'))
    DomainValidator.str_validate_length(this.get('name'), 100)
    DomainValidator.str_validate_length(this.get('email'), 255)
  }
}
