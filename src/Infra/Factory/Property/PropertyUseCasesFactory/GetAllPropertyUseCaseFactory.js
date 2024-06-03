
import GetAllPropertyUseCase from '../../../../Application/UseCases/PropertyUseCases/GetAllPropertyUseCase.js'
import PropertyMongo from '../../../Repository/Property/PropertyMongo.js'

export default class GetAllPropertyUseCaseFactory {
  static create () {
    const propertyRepository = new PropertyMongo()
    return new GetAllPropertyUseCase(propertyRepository)
  }
}
