import Analysis from '../../../Domain/Entities/Analysis.js'
import AnalysisRepository from '../../../Domain/Repositories/AnalysisRepositories/AnalysisRepository.js'
import UseCase from '../../../__seedwork/Application/UseCase.js'
import TypeException from '../../../__seedwork/Domain/Exceptions/TypeException.js'

export default class CreateAnalysisUseCase extends UseCase {
  constructor (analysisRepository) {
    super()
    if (!(analysisRepository instanceof AnalysisRepository)) {
      throw new TypeException('analysisRepository is required')
    }

    this.analysisRepository = analysisRepository
  }

  static InputClass = class {
    constructor (id, idField, desiredBaseSaturation, currentBaseSaturation, totalCationExchangeCapacity, relativeTotalNeutralizingPower, isCalculateNpk, phosphor, potassium, expectedProductivity) {
      if (isCalculateNpk) {
        this.isCalculateNpk = isCalculateNpk
        this.phosphor = phosphor
        this.potassium = potassium
        this.expectedProductivity = expectedProductivity
      }
      this.id = id
      this.idField = idField
      this.desiredBaseSaturation = desiredBaseSaturation
      this.currentBaseSaturation = currentBaseSaturation
      this.totalCationExchangeCapacity = totalCationExchangeCapacity
      this.relativeTotalNeutralizingPower = relativeTotalNeutralizingPower
    }
  }

  static OutputClass = class {
    constructor (success, message, analysis) {
      this.success = success
      this.message = message
      this.analysis = analysis
    }
  }

  async execute (data) {
    if (!(data instanceof CreateAnalysisUseCase.InputClass)) {
      throw new TypeException('data must be a InputClass instance')
    }

    if (!data.isCalculateNpk) {
      try {
        const analysis = new Analysis(data.id, data.idField, data.desiredBaseSaturation, data.currentBaseSaturation, data.totalCationExchangeCapacity, data.relativeTotalNeutralizingPower)
        analysis.calculateLiming()
        return new CreateAnalysisUseCase.OutputClass(true, 'Success on create analysis', analysis.to_dict())
      } catch (e) {
        console.log('Error saved', e)
        return new CreateAnalysisUseCase.OutputClass(false, 'Error on create analysis', '')
      }
    } else {
      try {
        const analysis = new Analysis(data.id, data.idField, data.desiredBaseSaturation, data.currentBaseSaturation, data.totalCationExchangeCapacity, data.relativeTotalNeutralizingPower)

        const resultCalculateNpk = analysis.calculateNPK(data.phosphorus, data.potassium, data.expectedProductivity)
        console.log(analysis.to_dict())
        const output = this.analysisRepository.save(analysis)
        return new CreateAnalysisUseCase.OutputClass(true, 'Success on create analysis', analysis)
      } catch (e) {
        return new CreateAnalysisUseCase.OutputClass(false, 'Error on create analysis', '')
      }
    }
  }
}
