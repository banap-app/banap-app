import FieldMongo from '../../../Repository/Field/FieldMongo.js'
import CreateFieldUseCase from '../../../../Application/UseCases/FieldUseCases/CreateFieldUseCase.js'

export default class CreateFieldUseCaseFactory {
  static create () {
    const fieldRepository = new FieldMongo()
    return new CreateFieldUseCase(fieldRepository)
  }
}
