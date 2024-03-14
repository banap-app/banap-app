import { v4 } from 'uuid'
import Entity from '../../__seedwork/Domain/Entity.js'
import Password from '../ValueObject/Password.js'
import Email from '../ValueObject/Email.js'

export default class Engineer extends Entity {
  #props

  constructor (name, password, email, id) {
    super()
    this.#props = {
      id: id ? id : v4(),
      name,
      password: new Password(password),
      email: new Email(email)
    }
  }

  to_dict () {
    return super.to_dict(this.#props)
  }
}
