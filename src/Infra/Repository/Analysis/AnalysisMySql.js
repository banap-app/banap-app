import AnalysisRepository from '../../../Domain/Repositories/AnalysisRepositories/AnalysisRepository.js'
import MySqlConnection from '../../Database/MySqlConnection.js'

export default class AnalysisMySql extends AnalysisRepository {
    async createConnection()
    save (analysis) {
      super.save(analysis)
      const sql = ''
      
    }
}