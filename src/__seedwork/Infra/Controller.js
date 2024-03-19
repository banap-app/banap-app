import Abstract from '../Abstract.js'
import AbstractError from '../AbstractError.js'

export default class Controller extends Abstract {
  execute () {
    throw new AbstractError('Not implemented')
  }
}
