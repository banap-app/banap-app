import UserRepository from '../../../Domain/Repositories/UserRepositories/UserRepository.js'
import Email from '../../../Domain/ValueObject/Email.js'

// Get the client
import mysql from 'mysql2/promise'

// Create the connection to database
export default class UserMySql extends UserRepository {
  async createConnection () {
    return await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'test'
    })
  }

  async save (user) {
    super.save(user)
    console.log('Fazendo consulta')
    const connection = await this.createConnection()
    try {
      console.log(user.get('password'))
      const [results, fields] = await connection.execute(
        'INSERT INTO users (uuid, name_user, password_user,email ,created_at, active) VALUES (?,?,?,?,?,?)',
        [user.get('id'), user.get('name'), user.get('password'), user.get('email'), user.get('created_at'), user.get('active')]
      )

      console.log(results) // results contains rows returned by server
      console.log(fields) // fields contains extra meta data about results, if available
    } catch (err) {
      console.log(err)
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
    return results
  }
}