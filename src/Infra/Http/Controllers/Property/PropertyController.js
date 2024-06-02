import TypeException from '../../../../__seedwork/Domain/Exceptions/TypeException.js'
import Controller from '../../../../__seedwork/Infra/Controller.js'
import CreatePropertyUseCase from '../../../../Application/UseCases/PropertyUseCases/CreatePropertyUseCase.js'
import GetPropertyUseCase from '../../../../Application/UseCases/PropertyUseCases/GetPropertyUseCase.js'

export default class PropertyController extends Controller {
  constructor (createPropertyUseCase, getPropertyUseCase) {
    super()
    if (!(createPropertyUseCase instanceof CreatePropertyUseCase)) {
      throw new TypeException(
        'createPropertyUseCase must be instance of CreatePropertyUseCase'
      )
    }

    if (!(getPropertyUseCase instanceof GetPropertyUseCase)) {
      throw new TypeException(
        'getPropertyUseCase must be instance of GetPropertyUseCase'
      )
    }
    this.getPropertyUseCase = getPropertyUseCase
    this.createPropertyUseCase = createPropertyUseCase
  }

  async handle (httpRequest) {
    switch (httpRequest.method) {
      case 'POST':
        return await this.create(httpRequest)
      case 'GET':
        return await this.getProperty(httpRequest)
      default:
        throw new Error(
          `Path ${httpRequest.path} is not allowed for method POST`
        )
    }
  }

  async create (data) {
    if (!data) {
      throw new Error('data is required')
    }

    const input = new CreatePropertyUseCase.InputClass(data.ownerId, data.name)
    const output = await this.createPropertyUseCase.execute(input)
    return output
  }

  async getProperty (data) {
    if (!data) {
      throw new Error('data is required')
    }

    const input = new GetPropertyUseCase.InputClass(data.id)
    const output = await this.getPropertyUseCase.execute(input)
    return output
  }
}
