import PropertyController from '../../Http/Controllers/Property/PropertyController.js'
import CreatePropertyUseCaseFactory from './PropertyUseCasesFactory/CreatePropertyUseCaseFactory.js'
import GetPropertyUseCaseFactory from './PropertyUseCasesFactory/GetPropertyUseCaseFactory.js'

export default class PropertyControllerFactory {
  static create () {
    const createPropertyUseCase = CreatePropertyUseCaseFactory.create()
    const getPropertyUseCase = GetPropertyUseCaseFactory.create()

    return new PropertyController(
      createPropertyUseCase,
      getPropertyUseCase
    )
  }
}
