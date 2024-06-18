import AnalysisController from '../../Http/Controllers/Analysis/AnalysisController.js'
import CreateAnalysisUseCaseFactory from './AnalysisUseCasesFactory/CreateAnalysisUseCaseFactory.js'
import GetAllAnalysisUseCaseFactory from './AnalysisUseCasesFactory/GetAllAnalysisUseCaseFactory.js'

export default class AnalysisControllerFactory {
  static create () {
    const createAnalysisUseCase = CreateAnalysisUseCaseFactory.create()
    const getAllAnalysisUseCase = GetAllAnalysisUseCaseFactory.create()
    return new AnalysisController(createAnalysisUseCase, getAllAnalysisUseCase)
  }
}
