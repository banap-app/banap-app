import UserRepository from '../../../Domain/Repositories/UserRepositories/UserRepository.js'
import Email from '../../../Domain/ValueObject/Email.js'
import DriverPg from 'pg'
const { Pool } = DriverPg

export default class UserPostgre extends UserRepository {
  async save (user) {
    super.save(user)
    const pool = new Pool({
      connectionString: process.env.POSTGRESQL_CONNECTION
    })

    const client = await pool.connect()

    const query = `INSERT INTO users (name, password, email, active) VALUES ($1, $2, $3, $4)`
    const values = [user.name, user.password, user.email, user.active]

    await client.query(query, values)
  }

  async update (user) {
    super.update(user)
    return user
  }

  async findAll () {
    super.findAll()
    return { user: 'tester' }
  }

  async delete (id) {
    super.delete(id)
    return { user: 'tester' }
  }

  async findByEmail (email) {
    const emailType = new Email('asher@gmail.com')
    super.findByEmail(emailType)
    return { user: 'tester' }
  }

  async findById (id) {
    super.findById(id)
    return { user: 'tester' }
  }
}
