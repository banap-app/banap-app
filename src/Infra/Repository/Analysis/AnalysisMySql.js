import AnalysisRepository from '../../../Domain/Repositories/AnalysisRepositories/AnalysisRepository.js'
import MySqlConnection from '../../Database/MySqlConnection.js'

export default class AnalysisMySql extends AnalysisRepository {
  async createConnection () {
    return await MySqlConnection.connect()
  }

  async closeConnection () {
    return await MySqlConnection.disconnect()
  }

  async save (analysis) {
    super.save(analysis)
    const connection = await this.createConnection()
    try {
      const sql = 'INSERT INTO analysis (uuid, idField, desiredBaseSaturation, currentBaseSaturation, totalCationExchangeCapacity, relativeTotalNeutralizingPower,liming ,phosphor, potassium, expectedProductivity, nitrogen) VALUES (?,?,?,?,?,?,?,?,?,?,?)'
      await connection.execute(sql, [analysis.get('id'), analysis.get('idField'), analysis.get('desiredBaseSaturation'), analysis.get('currentBaseSaturation'), analysis.get('totalCationExchangeCapacity'), analysis.get('relativeTotalNeutralizingPower'),analysis.get('liming') ,analysis.get('phosphor'), analysis.get('potassium'), analysis.get('expectedProductivity'), analysis.get('nitrogen')])
      await this.closeConnection()
      return true
    } catch (err) {
      console.log(err)
      await this.closeConnection()
      return false
    }
  }

  async delete (id) {
    super.delete(id)
    const connection = await this.createConnection()
    const [results, fields] = await connection.execute(
      'DELETE FROM analysis WHERE `id` =?',
      [id]
    )
    await this.closeConnection()
    return results
  }

  async update (analysis) {
    super.update(analysis)
    const connection = await this.createConnection()
    try {
      const sql = 'INSERT INTO analysis (uuid, '
      await connection.execute(sql, [])
      await this.closeConnection()
      return true
    } catch (err) {
      console.log(err)
      await this.closeConnection()
      return false
    }
  }

  async findById (id) {
    super.findById(id)
    const connection = await this.createConnection()
    const [results, fields] = await connection.execute(
      'SELECT * FROM analysis WHERE `id` =?',
      [id]
    )
    await this.closeConnection()
    return results
  }

  async findAllByFieldId (fieldId) {
    super.findAllByFieldId(fieldId)
    const connection = await this.createConnection()
    const [results, fields] = await connection.execute(
      'SELECT * FROM analysis WHERE `fieldId` =?',
      [fieldId]
    )
    await this.closeConnection()
    return results
  }
}
