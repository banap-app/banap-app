import pkg from 'mysql2/promise'
import { configDotenv } from 'dotenv'
const { createConnection } = pkg

configDotenv({path:'.env'})

export default class MySqlConnection {
  static async connect () {
    return await createConnection({
      host: process.env.HOST_DB,
      user: process.env.USER_DB,
      password: process.env.PASSWORD_DB,
      database: process.env.DATABASE
    })
  }

  static async disconnect () {
    return (await this.connect()).destroy()
  }
}
