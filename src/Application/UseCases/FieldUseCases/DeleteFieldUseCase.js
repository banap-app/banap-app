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
    if (!(data instanceof DeleteFieldUseCase.InputClass)) {
      throw new Error('Data is not an instance of InputClass')
    }
    /* const field = await this.fieldRepository.findById(data.id)
    if (!field) {
      throw new Error('Field not found')
    } */
    try {
      const fields = await this.fieldRepository.findById(data.id) 
      if (fields == null) {
        return new DeleteFieldUseCase.OutputClass(false, 'Field not found')
      }
      await this.fieldRepository.delete(data.id)
      return new DeleteFieldUseCase.OutputClass(true, 'Success delete field')
    } catch (e) {
      console.log(e);
      return new DeleteFieldUseCase.OutputClass(false, 'Error on delete field')
    }
  }
}
