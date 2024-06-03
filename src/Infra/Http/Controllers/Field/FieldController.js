import CreateFieldUseCase from '../../../../Application/UseCases/FieldUseCases/CreateFieldUseCase.js'
import TypeException from '../../../../__seedwork/Domain/Exceptions/TypeException.js'
import Controller from '../../../../__seedwork/Infra/Controller.js'

export default class FieldController extends Controller {
  constructor (createFieldUseCase) {
    super()
    if (!(createFieldUseCase instanceof CreateFieldUseCase)) {
      throw new TypeException(
        'CreateFieldUseCaseFactory must be instance of CreateFieldUseCaseFactory'
      )
    }

    this.createFieldUseCase = createFieldUseCase
  }

  async handle(httpRequest) {
    switch (httpRequest.method) {
      case 'POST':
        return await this.create(httpRequest.body)
    }
  }

  async create (data) {
    if (!data) {
      throw new Error('No data to create')
    }

    const input = new CreateFieldUseCase.InputClass(
      data.id,
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
    console.log(input)
    const output = await this.createFieldUseCase.execute(input)
    return output
  }
}
