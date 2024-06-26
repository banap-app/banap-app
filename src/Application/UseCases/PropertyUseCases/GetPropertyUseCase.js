import PropertyRepository from '../../../Domain/Repositories/PropertyRepositories/PropertyRepository.js'
import UseCase from '../../../__seedwork/Application/UseCase.js'
import TypeException from '../../../__seedwork/Domain/Exceptions/TypeException.js'

export default class GetPropertyUseCase extends UseCase {
  constructor(propertyRepository) {
    super()
    if (!(propertyRepository instanceof PropertyRepository)) {
      throw new TypeException(
        'PropertyRepository must be a PropertyRepository instance'
      )
    }
    this.propertyRepository = propertyRepository
  }

  static InputClass = class {
    constructor(id) {
      this.id = id
    }
  }

  static OutputClass = class {
    constructor (success, message, property) {
      if (typeof success !== 'boolean') {
        throw new TypeException('success must be a boolean')
      }
      if (typeof message !== 'string') {
        throw new TypeException('message must be a string')
      }
      this.success = success
      this.message = message
      this.property = property
    }
  }

  async execute(data) {
    if (!(data instanceof GetPropertyUseCase.InputClass)) {
      throw new TypeException('Data is not an instance of InputClass')
    }
    try {
      const property = await this.propertyRepository.findByPropertyId(data.id)
      return new GetPropertyUseCase.OutputClass(true, 'Property found', property)
    } catch (e) {
      return new GetPropertyUseCase.OutputClass(false, 'Property not found', '')
    }
  }
}
