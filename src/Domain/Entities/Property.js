import TypeException from '../../__seedwork/Domain/Exceptions/TypeException.js'
import Entity from '../../__seedwork/Domain/Entity.js'
import DomainValidator from '../Validators/DomainValidator.js'
import { v4, validate as validateUuid } from 'uuid'

export default class Property extends Entity {
  #props

  constructor (id, owner, name) {
    super()
    this.#props = {
      id: id ? id : v4(),
      name,
      owner,
      created_at: new Date().toISOString()
    }
    this.validate()
  }

  get (propName) {
    return this.#props[propName]
  }

  set (propName, value) {
    this.#props[propName] = value
  }

  to_dict () {
    return super.to_dict(this.#props)
  }

  validate () {
    const propsString = ['name', 'owner', 'id']
    for (const propName in propsString) {
      if (typeof this.get(propsString[propName]) !== 'string') {
        throw new TypeException(`${propsString[propName]} must be a string`)
      }
    }
    if (!validateUuid(this.get('id'))) {
      throw new TypeException('ID must be a valid UUID')
    }
    DomainValidator.str_validate_length(this.get('name'), 40)
  }
}
