import Analysis from '../../../Domain/Entities/Analysis.js'
import AnalysisRepository from '../../../Domain/Repositories/AnalysisRepositories/AnalysisRepository.js'
import UseCase from '../../../__seedwork/Application/UseCase.js'
import TypeException from '../../../__seedwork/Domain/Exceptions/TypeException'

export default class CreateAnalysisUseCase extends UseCase {
  constructor (analysisRepository) {
    super()
    if (!(analysisRepository instanceof AnalysisRepository)) {
      throw new TypeException('analysisRepository is required')
    }
  }

  static InputClass = class {
    constructor (id, idField, desiredBaseSaturation, currentBaseSaturation, totalCationExchangeCapacity, relativeTotalNeutralizingPower) {
      this.id = id
      this.idField = idField
      this.desiredBaseSaturation = desiredBaseSaturation
      this.currentBaseSaturation = currentBaseSaturation
      this.totalCationExchangeCapacity = totalCationExchangeCapacity
      this.relativeTotalNeutralizingPower = relativeTotalNeutralizingPower
    }
  }

  static OutputClass = class {
    constructor (success, message) {
      this.success = success
      this.message = message
    }
  }

  async execute (data) {
    if (!(data instanceof CreateAnalysisUseCase.InputClass)) {
      throw new TypeException('data must be a InputClass instance')
    }

    const analysis = new Analysis(data.id, data.idField, data.desiredBaseSaturation, data.currentBaseSaturation, data.totalCationExchangeCapacity, data.relativeTotalNeutralizingPower)
    try {
      const output = this.analysisRepository.save(analysis)
      return new CreateAnalysisUseCase.OutputClass(true, 'Success on create analysis')
    } catch (e) {
      return new CreateAnalysisUseCase.OutputClass(false, 'Error on create analysis')
    }
  }
}
