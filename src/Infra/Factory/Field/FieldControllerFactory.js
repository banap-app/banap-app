import FieldController from '../../Http/Controllers/Field/FieldController.js'
import CreateFieldUseCaseFactory from './FieldUseCasesFactory/CreateFieldUseCaseFactory.js'

export default class FieldControllerFactory {
  static create () {
    const createFieldUseCase = CreateFieldUseCaseFactory.create()
    return new FieldController(createFieldUseCase)
  }
}
