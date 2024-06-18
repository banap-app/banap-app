import CreateAnalysisUseCase from '../../../../Application/UseCases/AnalysisUseCases/CreateAnalysisUseCase.js'
import GetAllAnalysisUseCase from '../../../../Application/UseCases/AnalysisUseCases/GetAllAnalysisUseCase.js'
import Controller from '../../../../__seedwork/Infra/Controller.js'

export default class AnalysisController extends Controller {
  constructor(createAnalysisUseCase, getAllAnalysisUseCase) {
    super()
    if (!(createAnalysisUseCase instanceof CreateAnalysisUseCase)) {
      throw new Error('createAnalysisUseCase is required')
    }

    if (!(getAllAnalysisUseCase instanceof GetAllAnalysisUseCase)) {
      throw new Error('getAllAnalysisUseCase is required')
    }
    this.createAnalysisUseCase = createAnalysisUseCase
    this.getAllAnalysisUseCase = getAllAnalysisUseCase
  }

  handle(httpRequest) {
    switch (httpRequest.method) {
      case 'POST':
        switch (httpRequest.path) {
          case '/create':
            return this.create(httpRequest.body)
          case '/allAnalysis':
            return this.getAllAnalysis(httpRequest.body)
          default:
            throw new Error(
              `Path ${httpRequest.path} is not allowed for method POST`
            )
        }

      default:
        throw new Error('Method not allowed')
    }
  }

  async create(data) {
    if (!data) {
      throw new Error('No data to create')
    }

    const input = new CreateAnalysisUseCase.InputClass(
      data.id,
      data.idField,
      data.desiredBaseSaturation,
      data.currentBaseSaturation,
      data.totalCationExchangeCapacity,
      data.relativeTotalNeutralizingPower,
      data.isCalculateNpk,
      data.phosphor,
      data.potassium,
      data.expectedProductivity
    )

    const output = await this.createAnalysisUseCase.execute(input)

    return output
  }

  async getAllAnalysis (data) {
    if (!data) {
      throw new Error('No data to create')
    }

    const input = new GetAllAnalysisUseCase.InputClass(data.idField)
    const output = await this.getAllAnalysisUseCase.execute(input)
    return output
  }
}
