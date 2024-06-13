import AuthTokenService from '../../Application/Adapters/AuthTokenService.js'
import pkg from 'jsonwebtoken'
import { configDotenv } from 'dotenv'
const { sign, verify } = pkg

configDotenv({path:'.env'})

export default class JwtService extends AuthTokenService {
  generateToken (payload) {
    return sign({ payload }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_TIME_EXPIRES })
  }

  verifyToken (payload) {
    return verify(payload, process.env.JWT_SECRET)
  }
}
