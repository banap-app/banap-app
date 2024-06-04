import GetFieldUseCase from '../../../../Application/UseCases/FieldUseCases/GetFieldUseCase.js'
import FieldMongo from '../../../Repository/Field/FieldMongo.js'

export default class GetFieldUseCaseFactory {
  static create () {
    const fieldRepository = new FieldMongo()
    return new GetFieldUseCase(fieldRepository)
  }
}
