import GetAllAnalysisUseCase from '../../../../Application/UseCases/AnalysisUseCases/GetAllAnalysisUseCase.js'
import AnalysisMySql from '../../../Repository/Analysis/AnalysisMySql.js'

export default class GetAllAnalysisUseCaseFactory {
  static create() {
    const analysisRepository = new AnalysisMySql()
    return new GetAllAnalysisUseCase(analysisRepository)
  }
}
