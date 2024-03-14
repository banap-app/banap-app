export default class Abstract {
  constructor () {
    if (new.target === Abstract) {
      throw new Error('Cannot instantiate abstract class directly.')
    }
    if (this instanceof Abstract) {
      if (new.target.name === 'Entity') {
        throw new Error('Cannot instantiate abstract class directly.')
      }
    }
  }
}
