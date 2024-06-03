import PropertyRepository from '../../../Domain/Repositories/PropertyRepositories/PropertyRepository.js'
import UseCase from '../../../__seedwork/Application/UseCase.js'
import TypeException from '../../../__seedwork/Domain/Exceptions/TypeException.js'

export default class GetAllPropertyUseCase extends UseCase {
  constructor (propertyRepository) {
    super()
    if (!(propertyRepository instanceof PropertyRepository)) {
      throw new TypeException(
        'PropertyRepository must be a PropertyRepository instance'
      )
    }
    this.propertyRepository = propertyRepository
  }

  static InputClass = class {
    constructor (ownerId) {
      if (typeof ownerId !== 'string') {
        throw new TypeException('ownerId must be a string')
      }

      this.ownerId = ownerId
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

  async execute (data) {
    if (!(data instanceof GetAllPropertyUseCase.InputClass)) {
      throw new TypeException('Data is not an instance of InputClass')
    }
    const property = await this.propertyRepository.findByIdUser(data.ownerId)
    console.log(property)

    if (!property) {
      return new GetAllPropertyUseCase.OutputClass(false, 'Property not found', property)
    }

    return new GetAllPropertyUseCase.OutputClass(true, 'Property found', property)
  }
}
