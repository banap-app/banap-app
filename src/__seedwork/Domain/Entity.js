import Abstract from '../Abstract.js'

/**
 * Classe Entity
 *
 * Descrição:
 *   Esta classe serve como base para as entidades do domínio.
 */
export default class Entity extends Abstract {
  /**
   * Método to_dict
   *
   * Descrição:
   *   Converte a entidade em um objeto JavaScript.
   *
   * @param {Object} props Propriedades da entidade a serem incluídas no objeto JavaScript.
   * @returns {Object} Um objeto JavaScript contendo as propriedades da entidade.
   */
  to_dict (props) {
    // Retorna as propriedades da entidade
    return props
  }
}
