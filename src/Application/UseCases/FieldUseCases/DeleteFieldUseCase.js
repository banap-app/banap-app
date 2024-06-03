import UseCase from '../../../__seedwork/Application/UseCase.js'
import FieldRepository from '../../../Domain/Repositories/FieldRepositories/FieldRepository.js'

export default class DeleteFieldUseCase extends UseCase {
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
    constructor (success, message) {
      this.success = success
      this.message = message
    }
  }

  async execute (data) {
    const field = await this.fieldRepository.findById(data.id)
    if (!field) {
      throw new Error('Field not found')
    }
    try {
      await this.fieldRepository.delete(field)
      return new DeleteFieldUseCase.OutputClass(true, 'Success delete field')
    } catch (e) {
      return new DeleteFieldUseCase.OutputClass(false, 'Error on delete field')
    }
  }
}
