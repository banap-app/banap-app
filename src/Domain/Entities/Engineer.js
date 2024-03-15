import { v4, validate as validateUuid } from 'uuid'
import Entity from '../../__seedwork/Domain/Entity.js'
import Password from '../ValueObject/Password.js'
import Email from '../ValueObject/Email.js'
import DomainValidator from '../Validators/DomainValidator.js'
import TypeException from '../../__seedwork/Domain/Exceptions/TypeException.js'
import Crea from '../ValueObject/Crea.js'

/**
 * @typedef {Object} PrivateProperties - Definição das propriedades privadas da classe Engineer
 * @property {string} id - O ID do engenheiro
 * @property {string} name - O nome do engenheiro
 * @property {string} password - A senha do engenheiro
 * @property {string} email - O email do engenheiro
 * @property {boolean} active - O estado de ativação do engenheiro
 * @property {string} createdAt - A data de criação do engenheiro
 * @property {Crea} Crea - O número de registro no CREA do engenheiro
 */

export default class Engineer extends Entity {
  /**
   * @type {PrivateProperties}
   */
  #props

  /**
   * Cria uma instância de Engineer.
   * @param {string} name - O nome do engenheiro
   * @param {string} password - A senha do engenheiro
   * @param {string} email - O email do engenheiro
   * @param {string} [id] - A identificação única do engenheiro (opcional, será gerada automaticamente se não fornecida)
   * @param {boolean} active - O estado de ativação do engenheiro
   * @param {string} crea - O número de registro no CREA do engenheiro
   */
  constructor (name, password, email, id, active, crea) {
    super()
    this.#props = {
      id: id ? id : v4(),
      name,
      password: new Password(password).toString(),
      email: new Email(email).toString(),
      active,
      createdAt: new Date().toISOString(),
      Crea: new Crea(crea)
    }
    this.validate()
  }

  /**
   * Valida as propriedades da instância de Engineer.
   * @throws {TypeException} Lança uma exceção se alguma propriedade não estiver no formato correto.
   * @throws {Error} Lança uma exceção se o ID não for um UUID válido.
   */
  validate () {
    if (typeof this.get('name') !== 'string') {
      throw new TypeException('Name must be a string')
    }

    if (typeof this.get('password') !== 'string') {
      throw new TypeException('Password must be a string')
    }
    if (typeof this.get('email') !== 'string') {
      throw new TypeException('Email must be a string')
    }
    if (typeof this.get('id') !== 'string') {
      throw new TypeException('ID must be a string')
    }
    if (typeof this.get('createdAt') !== 'string') {
      throw new TypeException('CreateAt must be a string')
    }
    if (typeof this.get('active') !== 'boolean') {
      throw new TypeException('Active must be a boolean')
    }
    if (!validateUuid(this.get('id'))) {
      throw new Error('ID must be a valid UUID')
    }

    DomainValidator.str_is_not_empty(this.get('name'))
    DomainValidator.str_is_not_empty(this.get('password'))
    DomainValidator.str_validate_length(this.get('name'), 100)
    DomainValidator.str_validate_length(this.get('email'), 255)
  }

  /**
   * Ativa o engenheiro.
   */
  activate () {
    this.#props.active = true
  }

  /**
   * Desativa o engenheiro.
   */
  deactivate () {
    this.#props.active = false
  }

  /**
   * Obtém o valor de uma propriedade específica do engenheiro.
   * @param {string} propName - O nome da propriedade que se deseja obter.
   * @returns {*} O valor da propriedade correspondente.
   */
  get (propName) {
    return this.#props[propName]
  }

  /**
   * Converte as propriedades do engenheiro em um dicionário.
   * @returns {object} Um dicionário contendo todas as propriedades do engenheiro.
   */
  to_dict () {
    return super.to_dict(this.#props)
  }
}
