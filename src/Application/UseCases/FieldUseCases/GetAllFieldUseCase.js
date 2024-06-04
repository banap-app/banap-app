import FieldRepository from '../../../Domain/Repositories/FieldRepositories/FieldRepository.js'
import UseCase from '../../../__seedwork/Application/UseCase.js'

export default class GetAllFieldUseCase extends UseCase {
  constructor (fieldRepository) {
    super()
    if (!(fieldRepository instanceof FieldRepository)) {
      throw new Error('fieldRepository is required')
    }
    this.fieldRepository = fieldRepository
  }

  static InputClass = class {
    constructor (idUser) {
      this.idUser = idUser
    }
  }

  static OutputClass = class {
    constructor (success, message, fields) {
      this.fields = fields
      this.success = success
      this.message = message
    }
  }

  async execute (data) {
    if (!(data instanceof GetAllFieldUseCase.InputClass)) {
      throw new Error('Data is not an instance of InputClass')
    }

    try {
      const fields = await this.fieldRepository.findByUserId(data.idUser)
      if (fields.length === 0) {
        return new GetAllFieldUseCase.OutputClass(
          true,
          'Fields not found',
          null
        )
      }

      return new GetAllFieldUseCase.OutputClass(
        true,
        'Success get fields',
        fields
      )
    } catch (e) {
      return new GetAllFieldUseCase.OutputClass(
        false,
        'Error on get fields',
        null
      )
    }
  }
}
