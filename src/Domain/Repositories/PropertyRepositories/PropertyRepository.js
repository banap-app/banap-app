import Abstract from '../../../__seedwork/Abstract.js'
import Property from '../../Entities/Property.js'
import DomainException from '../../Exceptions/DomainException.js'
import { validate as validateUUID } from 'uuid'

export default class PropertyRepository extends Abstract {
  save (property) {
    if (!(property instanceof Property)) {
      throw new DomainException('Must be a Property')
    }
  }

  delete (property) {
    if (!(property instanceof Property)) {
      throw new DomainException('Must be a Property')
    }
  }

  findByIdUser (id) {
    if (!validateUUID(id)) {
      throw new DomainException('Must be a valid ID')
    }
    return id
  }

  findByPropertyId (propertyId) {
    if (!validateUUID(propertyId)) {
      throw new DomainException('Must be a valid ID')
    }
    return propertyId
  }

  update (property) {
    if (!(property instanceof Property)) {
      throw new DomainException('Must be a Property')
    }
  }
}
