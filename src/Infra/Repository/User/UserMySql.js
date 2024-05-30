import UserRepository from '../../../Domain/Repositories/UserRepositories/UserRepository.js'
import Email from '../../../Domain/ValueObject/Email.js'

// Get the client
import mysql from 'mysql2/promise'
import MySqlConnection from '../../Database/MySqlConnection.js'

// Create the connection to database
export default class UserMySql extends UserRepository {
  async createConnection () {
    return await MySqlConnection.connect()
  }

  async closeConnection () {
    return await MySqlConnection.disconnect()
  }

  async save (user) {
    super.save(user)
    const connection = await this.createConnection()
    try {
      const sql = 'INSERT INTO users (uuid, name_user, password_user,email ,created_at, active) VALUES (?,?,?,?,?,?)'
      await connection.execute(
        sql,
        [user.get('id'), user.get('name'), user.get('password'), user.get('email'), user.get('created_at'), user.get('active')]
      )
      await this.closeConnection()
      return true
    } catch (err) {
      console.log(err)
      await this.closeConnection()
      return false
    }
  }

  async update(user) {
    super.update(user)
  }

  async findByEmail (email) {
    super.findByEmail(email)
    const connection = await this.createConnection()
    const [results, fields] = await connection.execute(
      'SELECT * FROM users WHERE `email` = ?',
      [email]
    )
    await this.closeConnection()
    return results
  }
}