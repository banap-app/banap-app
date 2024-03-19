import Abstract from '../Abstract.js'
import AbstractError from '../AbstractError.js'

export default class UseCase extends Abstract {
  /**
   * Método execute
   *
   * Descrição:
   *   Executa o uso case.
   *
   * @param {Object} props Propriedades da entidade a serem incluídas no objeto JavaScript.
   * @returns {Object} Um objeto JavaScript contendo as propriedades da entidade.
   */
  execute (props) {
    throw new AbstractError('Not implemented')
  }
}
