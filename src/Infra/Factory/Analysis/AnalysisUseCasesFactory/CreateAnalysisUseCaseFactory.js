import CreateAnalysisUseCase from '../../../../Application/UseCases/AnalysisUseCases/CreateAnalysisUseCase.js'
import AnalysisMySql from '../../../Repository/Analysis/AnalysisMySql.js'

export default class CreateAnalysisUseCaseFactory {
  static create () {
    const analysisRepository = new AnalysisMySql()
    return new CreateAnalysisUseCase(analysisRepository)
  }
}
