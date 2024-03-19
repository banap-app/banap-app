import UseCase from '../../../../__seedwork/Application/UseCase.js'
import Controller from '../../../../__seedwork/Infra/Controller.js'

export default class UserController extends Controller {
  constructor (useCase) {
    super()
    if (!useCase) {
      throw new Error('useCase is required')
    }
    if (!(useCase instanceof UseCase)) {
      throw new Error('useCase must be an instance of UseCase')
    }
    this.useCase = useCase
  }

  execute (data) {
    if (!data) {
      throw new Error('data is required')
    }

    const output = this.useCase.execute(data)

    return output
  }
}
