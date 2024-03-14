import DomainException from '../Exceptions/DomainException.js'

export default class Password {
  constructor (password) {
    if (password.length < 8) {
      throw new DomainException('Password must be at least 8 characters')
    }
    const regex = new RegExp(
      /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?|\-=\/~]+$/
    )

    if (!regex.test(password)) {
      throw new DomainException(
        'Password must contain at least one number and one uppercase letter'
      )
    }
    this.password = password
  }

  toString () {
    return this.password
  }
}
