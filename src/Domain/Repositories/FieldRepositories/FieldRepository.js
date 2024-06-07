import Abstract from '../../../__seedwork/Abstract.js'
import DomainException from '../../Exceptions/DomainException.js'
import Field from '../../../Domain/Entities/Field.js'
import TypeException from '../../../__seedwork/Domain/Exceptions/TypeException.js'

export default class FieldRepository extends Abstract {
  save (field) {
    if (!(field instanceof Field)) {
      throw new DomainException('field must be a Field')
    }
  }

  delete (id) {
    if (!id) {
      throw new DomainException('id must be a string')
    }
  }

  update(field) {
    if (!(field instanceof Field)) {
      throw new DomainException('field must be a Field')
    }
  }

  findByUserId (id) {
    if (!id) {
      throw new DomainException('id is required')
    }
    if (typeof id !== 'string') {
      throw new TypeException('id must be a string')
    }
  }

  findByPropertyId (id) {
    if (!id) {
      throw new DomainException('id is required')
    }
    if (typeof id !== 'string') {
      throw new TypeException('id must be a string')
    }
  }

  findById (id) {
    if (!id) {
      throw new DomainException('id is required')
    }
    if (typeof id !== 'string') {
      throw new TypeException('id must be a string')
    }
  }

  findAll (id) {
    if (!id) {
      throw new DomainException('id is required')
    }
    if (typeof id !== 'string') {
      throw new TypeException('id must be a string')
    }
  }
}
