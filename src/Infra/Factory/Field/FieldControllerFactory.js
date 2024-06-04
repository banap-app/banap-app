import FieldController from '../../Http/Controllers/Field/FieldController.js'
import CreateFieldUseCaseFactory from './FieldUseCasesFactory/CreateFieldUseCaseFactory.js'
import DeleteFieldUseCaseFactory from './FieldUseCasesFactory/DeleteFieldUseCaseFactory.js'
import GetAllFieldUseCaseFactory from './FieldUseCasesFactory/GetAllFieldUseCaseFactory.js'
import GetFieldUseCaseFactory from './FieldUseCasesFactory/GetFieldUseCaseFactory.js'
import UpdateFieldUseCaseFactory from './FieldUseCasesFactory/UpdateFieldUseCaseFactory.js'

export default class FieldControllerFactory {
  static create () {
    const createFieldUseCase = CreateFieldUseCaseFactory.create()
    const getAllFieldUseCase = GetAllFieldUseCaseFactory.create()
    const deleteFieldUseCase = DeleteFieldUseCaseFactory.create()
    const getFieldUseCase = GetFieldUseCaseFactory.create()
    const updateFieldUseCase = UpdateFieldUseCaseFactory.create()
    return new FieldController(createFieldUseCase, getAllFieldUseCase, deleteFieldUseCase, getFieldUseCase, updateFieldUseCase)
  }
}
