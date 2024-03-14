import Abstract from './Abstract.js'

export default class Entity extends Abstract {
  constructor () {
    super()
    if (this.to_dict === Entity.prototype.to_dict) {
      throw new Error('Need implement all methods of Entity')
    }
  }

  to_dict (props) {
    return props
  }
}
