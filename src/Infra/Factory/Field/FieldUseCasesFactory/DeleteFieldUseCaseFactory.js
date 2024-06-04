import DeleteFieldUseCase from '../../../../Application/UseCases/FieldUseCases/DeleteFieldUseCase.js'
import FieldMongo from '../../../Repository/Field/FieldMongo.js'

export default class DeleteFieldUseCaseFactory {
  static create () {
    const fieldRepository = new FieldMongo()
    return new DeleteFieldUseCase(fieldRepository)
  }
}
