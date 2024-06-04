import Field from '../../../Domain/Entities/Field.js'
import FieldRepository from '../../../Domain/Repositories/FieldRepositories/FieldRepository.js'
import UseCase from '../../../__seedwork/Application/UseCase.js'
import TypeException from '../../../__seedwork/Domain/Exceptions/TypeException.js'

export default class CreateFieldUseCase extends UseCase {
  constructor (fieldRepository) {
    super()
    if (!(fieldRepository instanceof FieldRepository)) {
      throw new Error('fieldRepository is needed instanceof FieldRepository')
    }

    this.fieldRepository = fieldRepository
  }

  static InputClass = class {
    constructor (
      idProperty,
      name,
      photo,
      owner,
      description,
      cultureOfPlants,
      firstCoordinate,
      secondCoordinate,
      thirdCoordinate,
      fourthCoordinate
    ) {
      this.idProperty = idProperty
      this.name = name
      this.photo = photo
      this.owner = owner
      this.description = description
      this.cultureOfPlants = cultureOfPlants
      this.firstCoordinate = firstCoordinate
      this.secondCoordinate = secondCoordinate
      this.thirdCoordinate = thirdCoordinate
      this.fourthCoordinate = fourthCoordinate
    }
  }

  static OutputClass = class {
    constructor (success, message) {
      this.success = success
      this.message = message
    }
  }

  async execute (data) {
    if (!(data instanceof CreateFieldUseCase.InputClass)) {
      throw new TypeException('Data is not an instance of InputClass')
    }
    const field = new Field('', data.idProperty, data.name, data.photo, data.owner, data.description, data.cultureOfPlants, data.firstCoordinate, data.secondCoordinate, data.thirdCoordinate, data.fourthCoordinate)

    try {
      const output = await this.fieldRepository.save(field)
      return new CreateFieldUseCase.OutputClass(true, 'Success creating field')
    } catch (e) {
      return new CreateFieldUseCase.OutputClass(false, 'Error on create field')
    }
  }
}
