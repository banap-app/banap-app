import Abstract from '../../../__seedwork/Domain/Abstract.js'
import User from '../../Entities/User.js'
import DomainException from '../../Exceptions/DomainException.js'

export default class UserRepository extends Abstract {
  save(user) {
    if (user instanceof User) throw new DomainException('Must be a User')
    return user
  }

  update(user) {
    if (user instanceof User) throw new DomainException('Must be a User')
    return user
  }
}

class Tester extends UserRepository {
  save(user) {
    super.save(user)
  }

  update(user) {
    super.update(user)

    return user
  }
}

let t = new Tester()
