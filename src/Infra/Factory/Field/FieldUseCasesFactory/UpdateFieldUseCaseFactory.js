import UpdateFieldUseCase from '../../../../Application/UseCases/FieldUseCases/UpdateFieldUseCase.js'
import FieldMongo from '../../../Repository/Field/FieldMongo.js'

export default class UpdateFieldUseCaseFactory {
  static create () {
    const fieldRepository = new FieldMongo()
    return new UpdateFieldUseCase(fieldRepository)
  }
}
