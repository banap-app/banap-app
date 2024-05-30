import UseCase from '../../../__seedwork/Application/UseCase.js'
import TypeException from '../../../__seedwork/Domain/Exceptions/TypeException.js'
import Property from '../../../Domain/Entities/Property.js'
import PropertyRepository from '../../../Domain/Repositories/PropertyRepositories/PropertyRepository.js'

export default class CreatePropertyUseCase extends UseCase {
  constructor(propertyRepository) {
    super()
    if (!(propertyRepository instanceof PropertyRepository)) {
      throw new TypeException(
        'propertyRepository is not an instance of PropertyRepository'
      )
    }
    this.propertyRepository = propertyRepository
  }

  static InputClass = class {
    constructor (owner, name) {
      this.owner = owner
      this.name = name
    }
  }

  static OutputClass = class {
    constructor (success, message) {
      if (typeof success !== 'boolean') {
        throw new TypeException('success must be a boolean')
      }
      if (typeof message !== 'string') {
        throw new TypeException('message must be a string')
      }
      this.success = success
      this.message = message
    }
  }

  async execute (data) {
    if (!(data instanceof CreatePropertyUseCase.InputClass)) {
      throw new TypeException('Data is not an instance of InputClass')
    }
    const property = new Property('', data.owner, data.name)
    try {
      console.log('saving')
      const output = await this.propertyRepository.save(property)
      return new CreatePropertyUseCase.OutputClass(true, 'Property created successfully')
    } catch (e) {
      return new CreatePropertyUseCase.OutputClass(false, 'Error')
    }
  }
}
