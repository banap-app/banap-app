import { v4, validate as validate_uuid } from "uuid";
import Email from "../ValueObject/Email.js";
import DomainValidator from "../Validators/DomainValidator.js";
import Password from "../ValueObject/Password.js";
import TypeException from "../Exceptions/TypeException.js";
import MagicObject from "../../__seedwork/Domain/MagicObject.js";
import Entity from "../../__seedwork/Domain/Entity.js";

/**
 * @typedef {Object} PrivateProperties - Definição das propriedades privadas da classe User
 * @property {UUID} id - O ID do usuário
 * @property {string} name - O nome do usuário
 * @property {string} password - A senha do usuário
 * @property {string} email - O email do usuário
 */

class User extends Entity {
  /**
   * @type {PrivateProperties}
   */
  #props;

  /**
   * Cria uma instância de User.
   * @param {string} name - O nome do usuário
   * @param {string} password - A senha do usuário
   * @param {string} email - O email do usuário
   * @param {UUID} id - O uid do usuário
   */
  constructor(name, password, email, id) {
    this.#props = {
      id: id ? id : v4(),
      name: name,
      password: new Password(password).toString(),
      email: new Email(email).toString(),
    };
    this.validate();
  }

  /**
   * Obtém o valor da propriedade privada especificada.
   * @param {string} propName - O nome da propriedade privada a ser acessada
   * @returns {string} O valor da propriedade privada
   */
  get(propName) {
   
    return this.#props[propName];
  }

  

  validate() {
   
    if (typeof this.get("name") !== "string") {
      throw new TypeException("Name must be a string");
    }

    if (typeof this.get("password") !== "string") {
      throw new TypeException("Password must be a string");
    }
    if (typeof this.get("email") !== "string") {
      throw new TypeException("Email must be a string");
    }

    if (!validate_uuid(this.get("id"))) {
      throw new Error("ID must be a valid UUID");
    }
    DomainValidator.str_is_not_empty(this.get("name"));
    DomainValidator.str_is_not_empty(this.get("password"));
    DomainValidator.str_validate_length(this.get("name"), 100);
    DomainValidator.str_validate_length(this.get("email"), 255);
  }
}

let u = new User("Asher", "13#sdsASdasd", "asher@gmail.com")