import TypeException from '../../../../__seedwork/Domain/Exceptions/TypeException.js'
import Controller from '../../../../__seedwork/Infra/Controller.js'
import CreatePropertyUseCase from '../../../../Application/UseCases/PropertyUseCases/CreatePropertyUseCase.js'
import GetAllPropertyUseCase from '../../../../Application/UseCases/PropertyUseCases/GetAllPropertyUseCase.js'
import GetPropertyUseCase from '../../../../Application/UseCases/PropertyUseCases/GetPropertyUseCase.js'

export default class PropertyController extends Controller {
  constructor (createPropertyUseCase, getAllPropertyUseCase, getPropertyUseCase) {
    super()
    if (!(createPropertyUseCase instanceof CreatePropertyUseCase)) {
      throw new TypeException(
        'createPropertyUseCase must be instance of CreatePropertyUseCase'
      )
    }

    if (!(getAllPropertyUseCase instanceof GetAllPropertyUseCase)) {
      throw new TypeException(
        'getPropertyUseCase must be instance of GetPropertyUseCase'
      )
    }

    if (!(getPropertyUseCase instanceof GetPropertyUseCase)) {
      throw new TypeException(
        'getPropertyUseCase must be instance of GetPropertyUseCase'
      )
    }
    this.getAllPropertyUseCase = getAllPropertyUseCase
    this.createPropertyUseCase = createPropertyUseCase
    this.getPropertyUseCase = getPropertyUseCase
  }

  async handle (httpRequest) {
    switch (httpRequest.method) {
      case 'POST':
        return await this.create(httpRequest.body)
      case 'GET':
        switch (httpRequest.path) {
          case '/allProperties':
            return await this.getAllProperty(httpRequest.body)
          case '/getProperty':
            return await this.getProperty(httpRequest.params)
          default:
            throw new Error(
              `Path ${httpRequest.path} is not allowed for method POST`
            )
        }
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
    console.log(data)
    const input = new CreatePropertyUseCase.InputClass(data.ownerId, data.name)
    console.log(input)
    const output = await this.createPropertyUseCase.execute(input)
    return output
  }

  async getAllProperty (data) {
    if (!data) {
      throw new Error('data is required')
    }
    const input = new GetAllPropertyUseCase.InputClass(data.ownerId)
    const output = await this.getAllPropertyUseCase.execute(input)
    return output
  }

  async getProperty (data) {
    if (!data) {
      throw new Error('data is required')
    }
    const input = new GetPropertyUseCase.InputClass(data.propertyId)
    const output = await this.getPropertyUseCase.execute(input)
    return output
  }
}
