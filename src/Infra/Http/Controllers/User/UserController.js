import UseCase from '../../../../__seedwork/Application/UseCase.js'
import Controller from '../../../../__seedwork/Infra/Controller.js'

export default class UserController extends Controller {
  constructor (useCaseCreate, useCaseDelete, useCaseLogin, useCaseUpdate) {
    super()
    if (!useCaseCreate) {
      throw new Error('useCaseCreate is required')
    }

    if (!useCaseDelete) {
      throw new Error('useCaseDelete is required')
    }

    if (!useCaseLogin) {
      throw new Error('useCaseLogin is required')
    }

    if (!useCaseUpdate) {
      throw new Error('useCaseUpdate is required')
    }

    if (!(useCaseCreate instanceof UseCase) || !(useCaseDelete instanceof UseCase) || !(useCaseLogin instanceof UseCase) || !(useCaseUpdate instanceof UseCase)) {
      throw new Error('useCase must be an instance of UseCase')
    }

    this.useCaseCreate = useCaseCreate
    this.useCaseDelete = useCaseDelete
    this.useCaseLogin = useCaseLogin
    this.useCaseUpdate = useCaseUpdate
  }

  create (data) {
    if (!data) {
      throw new Error('data is required')
    }

    const output = this.useCaseCreate.execute(data)

    return output
  }
}
