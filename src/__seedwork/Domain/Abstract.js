import AbstractError from './Exceptions/AbstractError'

export default class Abstract {
  constructor () {
    if (new.target === Abstract) {
      throw new AbstractError('Cannot instantiate abstract class directly.')
    }
    if (this instanceof Abstract) {
      if (new.target.name === 'Entity') {
        throw new AbstractError('Cannot instantiate abstract class directly.')
      }
    }
  }
}
