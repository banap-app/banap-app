import CreatePropertyUseCase from '../../../../Application/UseCases/PropertyUseCases/CreatePropertyUseCase.js'
import PropertyMongo from '../../../Repository/Property/PropertyMongo.js'

export default class CreatePropertyUseCaseFactory {
  static create () {
    const propertyRepository = new PropertyMongo()
    return new CreatePropertyUseCase(propertyRepository)
  }
}
