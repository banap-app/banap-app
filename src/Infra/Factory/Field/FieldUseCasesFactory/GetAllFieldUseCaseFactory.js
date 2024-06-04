import GetAllFieldUseCase from '../../../../Application/UseCases/FieldUseCases/GetAllFieldUseCase.js'
import FieldMongo from '../../../Repository/Field/FieldMongo.js'

export default class GetAllFieldUseCaseFactory {
  static create () {
    const fieldRepository = new FieldMongo()
    return new GetAllFieldUseCase(fieldRepository)
  }
}
