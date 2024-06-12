import CreateAnalysisUseCase from '../../../../Application/UseCases/AnalysisUseCases/CreateAnalysisUseCase.js'
import Controller from '../../../../__seedwork/Infra/Controller.js'

export default class AnalysisController extends Controller {
  constructor (createAnalysisUseCase) {
    super()
    if (!(createAnalysisUseCase instanceof CreateAnalysisUseCase)) {
      throw new Error('createAnalysisUseCase is required')
    }
    this.createAnalysisUseCase = createAnalysisUseCase
  }

  handle (httpRequest) {
    switch (httpRequest.method) {
      case 'POST':
        return this.create(httpRequest.body)
      default:
        throw new Error('Method not allowed')
    }
  }

  async create (data) {
    if (!data) {
      throw new Error('No data to create')
    }

    const input = new CreateAnalysisUseCase.InputClass(data.id, data.idField, data.desiredBaseSaturation, data.currentBaseSaturation, data.totalCationExchangeCapacity, data.relativeTotalNeutralizingPower, data.isCalculateNpk, data.phosphor, data.potassium, data.expectedProductivity)
    
    console.log(input)
    const output = await this.createAnalysisUseCase.execute(input)

    return output
  }
}
