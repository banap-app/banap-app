import CreateFieldUseCase from '../../../../Application/UseCases/FieldUseCases/CreateFieldUseCase.js'
import DeleteFieldUseCase from '../../../../Application/UseCases/FieldUseCases/DeleteFieldUseCase.js'
import GetAllFieldUseCase from '../../../../Application/UseCases/FieldUseCases/GetAllFieldUseCase.js'
import GetFieldUseCase from '../../../../Application/UseCases/FieldUseCases/GetFieldUseCase.js'
import UpdateFieldUseCase from '../../../../Application/UseCases/FieldUseCases/UpdateFieldUseCase.js'
import TypeException from '../../../../__seedwork/Domain/Exceptions/TypeException.js'
import Controller from '../../../../__seedwork/Infra/Controller.js'

export default class FieldController extends Controller {
  constructor (
    createFieldUseCase,
    getAllFieldUseCase,
    deleteFieldUseCase,
    getFieldUseCase,
    updateFieldUseCase
  ) {
    super()
    if (!(createFieldUseCase instanceof CreateFieldUseCase)) {
      throw new TypeException(
        'CreateFieldUseCaseFactory must be instance of CreateFieldUseCaseFactory'
      )
    }

    if (!(getAllFieldUseCase instanceof GetAllFieldUseCase)) {
      throw new TypeException(
        'GetAllFieldUseCaseFactory must be instance of GetAllFieldUseCaseFactory'
      )
    }

    if (!(deleteFieldUseCase instanceof DeleteFieldUseCase)) {
      throw new TypeException(
        'DeleteFieldUseCaseFactory must be instance of DeleteFieldUseCaseFactory'
      )
    }

    if (!(getFieldUseCase instanceof GetFieldUseCase)) {
      throw new TypeException(
        'GetFieldUseCaseFactory must be instance of GetFieldUseCaseFactory'
      )
    }

    if (!(updateFieldUseCase instanceof UpdateFieldUseCase)) {
      throw new TypeException(
        'UpdateFieldUseCaseFactory must be instance of UpdateFieldUseCaseFactory'
      )
    }

    this.createFieldUseCase = createFieldUseCase
    this.getAllFieldUseCase = getAllFieldUseCase
    this.deleteFieldUseCase = deleteFieldUseCase
    this.getFieldUseCase = getFieldUseCase
    this.updateFieldUseCase = updateFieldUseCase
  }

  async handle (httpRequest) {
    switch (httpRequest.method) {
      case 'POST':
        return await this.create(httpRequest.body)
      case 'DELETE':
        return await this.deleteField(httpRequest.body)
      case 'PUT':
        return await this.updateField(httpRequest.body)
      case 'GET':
        switch (httpRequest.path) {
          case '/allFields':
            return await this.getAllField(httpRequest.body)
          case '/getField':
            return await this.getField(httpRequest.params)
          default:
            throw new Error(
              `Path ${httpRequest.path} is not allowed for method POST`
            )
        }
      default:
        throw new Error(`Method ${httpRequest.method} is not allowed`)
    }
  }

  async create (data) {
    if (!data) {
      throw new Error('No data to create')
    }
    const input = new CreateFieldUseCase.InputClass(
      data.idProperty,
      data.name,
      data.photo,
      data.ownerId,
      data.description,
      data.cultureOfPlants,
      data.firstCoordinate,
      data.secondCoordinate,
      data.thirdCoordinate,
      data.fourthCoordinate
    )
    const output = await this.createFieldUseCase.execute(input)
    return output
  }

  async getAllField (data) {
    if (!data) {
      throw new Error('No data to create')
    }

    const input = new GetAllFieldUseCase.InputClass(data.idUser)
    const output = await this.getAllFieldUseCase.execute(input)
    return output
  }

  async getField (data) {
    if (!data) {
      throw new Error('No data to create')
    }

    const input = new GetFieldUseCase.InputClass(data.fieldId)
    const output = await this.getFieldUseCase.execute(input)
    return output
  }

  async deleteField (data) {
    if (!data) {
      throw new Error('No data to delete')
    }

    const input = new DeleteFieldUseCase.InputClass(data.fieldId)
    const output = await this.deleteFieldUseCase.execute(input)
    return output
  }

  async updateField (data) {
    if (!data) {
      throw new Error('No data to update')
    }

    const input = new UpdateFieldUseCase.InputClass(
      data.fieldId,
      data.idProperty,
      data.name,
      data.photo,
      data.ownerId,
      data.description,
      data.cultureOfPlants,
      data.firstCoordinate,
      data.secondCoordinate,
      data.thirdCoordinate,
      data.fourthCoordinate
    )
    const output = await this.updateFieldUseCase.execute(input)
    return output
  }
}
