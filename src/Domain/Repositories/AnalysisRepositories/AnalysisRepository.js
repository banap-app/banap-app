import Abstract from '../../../__seedwork/Abstract.js'
import TypeException from '../../../__seedwork/Domain/Exceptions/TypeException.js'
import Analysis from '../../Entities/Analysis.js'
import DomainException from '../../Exceptions/DomainException.js'
import { validate as validateUuid } from 'uuid'

export default class AnalysisRepository extends Abstract {
  save (analysis) {
    if (!(analysis instanceof Analysis)) {
      throw new DomainException('Must be a Analysis instance')
    }
  }

  update (analysis) {
    if (!(analysis instanceof Analysis)) {
      throw new DomainException('Must be a Analysis instance')
    }
  }

  delete (id) {
    if (!id) {
      throw new TypeException('Id must be defined')
    }
    if (typeof id !== 'string') {
      throw new TypeException('Id must be a string')
    }
  }

  findById (id) {
    if (!validateUuid(id)) {
      throw new TypeException('Id must be a valid ID')
    }
  }

  findAllByFieldId (idField) {
    if (!validateUuid(idField)) {
      throw new TypeException('Id must be a valid ID')
    }
  }
}
