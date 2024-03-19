import Entity from '../../__seedwork/Domain/Entity.js'
import DomainException from '../Exceptions/DomainException.js'

export default class Auth extends Entity {
  /**
   * @type {PrivateProperties}
   */
  #props

  constructor (token, refreshToken) {
    super()
    this.#props = {
      token,
      refreshToken
    }
    if (!token) {
      throw new DomainException('Token is required')
    }
    if (typeof token !== 'string') {
      throw new TypeError('token must be a string')
    }
  }

  to_dict () {
    return super.to_dict(this.#props)
  }

  get (propName) {
    return this.#props[propName]
  }
}
