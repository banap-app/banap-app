export default class TypeException extends Error {
  constructor (message) {
    super(message)
    this.name = 'TypeException'
  }
}
