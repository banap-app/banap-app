import FieldRepository from '../../../Domain/Repositories/FieldRepositories/FieldRepository.js'
import UseCase from '../../../__seedwork/Application/UseCase.js'
import TypeException from '../../../__seedwork/Domain/Exceptions/TypeException.js'

export default class UpdateFieldUseCase extends UseCase {
  constructor(fieldRepository) {
    super()
    if (!(fieldRepository instanceof FieldRepository)) {
      throw new Error('fieldRepository is required')
    }
    this.fieldRepository = fieldRepository
  }

  static InputClass = class {
    constructor(
      id,
      idProperty,
      name,
      photo,
      ownerId,
      description,
      cultureOfPlants,
      firstCoordinate,
      secondCoordinate,
      thirdCoordinate,
      fourthCoordinate
    ) {
      this.id = id
      this.idProperty = idProperty
      this.name = name
      this.photo = photo
      this.ownerId = ownerId
      this.description = description
      this.cultureOfPlants = cultureOfPlants
      this.firstCoordinate = firstCoordinate
      this.secondCoordinate = secondCoordinate
      this.thirdCoordinate = thirdCoordinate
      this.fourthCoordinate = fourthCoordinate
    }
  }

  static OutputClass = class {
    constructor(success, message) {
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

  async execute(data) {
    const {
      id,
      idProperty,
      name,
      photo,
      ownerId,
      description,
      cultureOfPlants,
      firstCoordinate,
      secondCoordinate,
      thirdCoordinate,
      fourthCoordinate,
    } = data
    try {
      const field = await this.fieldRepository.update(
        id,
        idProperty,
        name,
        photo,
        ownerId,
        description,
        cultureOfPlants,
        firstCoordinate,
        secondCoordinate,
        thirdCoordinate,
        fourthCoordinate
      )
      return new UpdateFieldUseCase.OutputClass(true, 'Success update field')
    } catch (e) {
      return new UpdateFieldUseCase.OutputClass(false, 'Field not updated')
    }
  }
}
