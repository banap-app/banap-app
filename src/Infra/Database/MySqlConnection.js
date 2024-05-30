import pkg from 'mysql2/promise'
const { createConnection } = pkg

export default class MySqlConnection {
  static async connect () {
    return await createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'test'
    })
  }

  static async disconnect () {
    console.log('Closing connection')
    return (await this.connect()).destroy
  }
}
