import { v4 } from "uuid";
import Email from "../ValueObject/Email.js";

/**
 * @typedef {Object} PrivateProperties - Definição das propriedades privadas da classe User
 * @property {string} id - O ID do usuário
 * @property {string} name - O nome do usuário
 * @property {string} password - A senha do usuário
 * @property {string} email - O email do usuário
 */

class User {
  /**
   * @type {PrivateProperties}
   */
  #props;

  /**
   * Cria uma instância de User.
   * @param {string} name - O nome do usuário
   * @param {string} password - A senha do usuário
   * @param {string} email - O email do usuário
   */
  constructor(name, password, email) {
    this.#props = {
      id: v4(),
      name: name,
      password: password,
      email: new Email(email).toString()
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
  validate(){
    if(typeof this.get("name") !== "string"){
        throw new Error("Name must be a string");
    }
    if(typeof this.get("password") !== "string"){
        throw new Error("Password must be a string");
    }
    if (typeof this.get("email") !== "string"){
        throw new Error("Email must be a string");
    }
    
  }
}

// Exemplo de uso
const user = new User("John", "password123", "john@example.com");

console.log(user.get("name")); // Saída: "John"
console.log(user.get("password")); // Saída: "password123"
console.log(user.get("email")); // Saída: "john@example.com"
console.log(user.get("id")); // Saída: ID gerado automaticamente
console.log(user.get("nonExistentProperty")); // Saída: undefined
