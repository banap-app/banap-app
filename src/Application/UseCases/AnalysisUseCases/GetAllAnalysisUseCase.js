import AnalysisRepository from '../../../Domain/Repositories/AnalysisRepositories/AnalysisRepository.js'
import UseCase from '../../../__seedwork/Application/UseCase.js'
import TypeException from '../../../__seedwork/Domain/Exceptions/TypeException.js'

export default class GetAllAnalysisUseCase extends UseCase {
  constructor(analysisRepository) {
    super()
    if (!(analysisRepository instanceof AnalysisRepository)) {
      throw new TypeException('analysisRepository is required')
    }

    this.analysisRepository = analysisRepository
  }

  static InputClass = class {
    constructor(idProperty) {
      this.idProperty = idProperty
    }
  }

  static OutputClass = class {
    constructor(success, message, analysis) {
      this.success = success
      this.message = message
      this.analysis = analysis
    }
  }

  async execute(data) {
    if (!(data instanceof GetAllAnalysisUseCase.InputClass)) {
      throw new TypeException('data must be a InputClass instance')
    }

    try {
      const analysis = await this.analysisRepository.findAllByFieldId(
        data.idProperty
      )
      return new GetAllAnalysisUseCase.OutputClass(
        true,
        'Analysis found',
        analysis
      )
    } catch (error) {
      return new GetAllAnalysisUseCase.OutputClass(
        false,
        'Analysis not found',
        ''
      )
    }
  }
}
