import Abstract from '../Abstract.js'
import AbstractError from '../AbstractError.js'

export default class Controller extends Abstract {
  handle () {
    throw new AbstractError('Not implemented')
  }
}
