import AuthTokenService from '../../Application/Adapters/AuthTokenService.js'
import pkg from 'jsonwebtoken'
const { sign, verify } = pkg

export default class JwtService extends AuthTokenService {
  generateToken (payload) {
    return sign({ payload }, 'project', { expiresIn: '10m' })
  }

  verifyToken (payload) {
    return verify(payload, 'project')
  }
}
