import AnalysisController from '../../Http/Controllers/Analysis/AnalysisController.js'
import CreateAnalysisUseCaseFactory from './AnalysisUseCasesFactory/CreateAnalysisUseCaseFactory.js'

export default class AnalysisControllerFactory {
  static create () {
    const createAnalysisUseCase = CreateAnalysisUseCaseFactory.create()
    return new AnalysisController(createAnalysisUseCase)
  }
}
