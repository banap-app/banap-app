import GetPropertyUseCase from '../../../../Application/UseCases/PropertyUseCases/GetPropertyUseCase.js'
import PropertyMongo from '../../../Repository/Property/PropertyMongo.js'

export default class GetPropertyUseCaseFactory {
  static create () {
    const propertyRepository = new PropertyMongo()
    return new GetPropertyUseCase(propertyRepository)
  }
}
