import FieldRepository from '../../../Domain/Repositories/FieldRepositories/FieldRepository.js'
import UseCase from '../../../__seedwork/Application/UseCase.js'

export default class GetFieldUseCase extends UseCase {
  constructor(fieldRepository) {
    super()
    if (!(fieldRepository instanceof FieldRepository)) {
      throw new Error('fieldRepository is required')
    }
    this.fieldRepository = fieldRepository
  }

  static InputClass = class {
    constructor (id) {
      this.id = id
    }
  }

  static OutputClass = class {
    constructor(success, messsage, field) {
      this.field = field
      this.success = success
      this.message = messsage
    }
  }

  async execute(input) {
    try {
      const field = await this.fieldRepository.findById(input.id)
      return new GetFieldUseCase.OutputClass(true, 'Success get Field', field)
    } catch (e) {
      return new GetFieldUseCase.OutputClass(false, 'Error getting field', '')
    }
  }
}
