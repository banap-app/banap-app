import DomainException from '../Exceptions/DomainException.js'
import TypeException from '../../__seedwork/Domain/Exceptions/TypeException.js'
import Entity from '../../__seedwork/Domain/Entity.js'
import { v4, validate as validateUuid } from 'uuid'

export default class Analysis extends Entity {
  #props

  constructor (
    id,
    desiredBaseSaturation,
    currentBaseSaturation,
    totalCationExchangeCapacity,
    relativeTotalNeutralizingPower,
    fieldOfAnalysis
  ) {
    super()
    this.#props = {
      id: id ? id : v4(),
      desiredBaseSaturation,
      currentBaseSaturation,
      totalCationExchangeCapacity,
      relativeTotalNeutralizingPower,
      fieldOfAnalysis
    }
    this.validate()
  }

  get (propName) {
    return this.#props[propName]
  }

  calculateLiming () {
    const liming = (this.get('desiredBaseSaturation') - this.get('currentBaseSaturation')) * this.get('totalCationExchangeCapacity') / this.get('relativeTotalNeutralizingPower')
    return (liming.toFixed(3) * 100).toFixed(1)
  }

  /**
   * Converte as propriedades da análise em um dicionário.
   * @returns {object} Um dicionário contendo todas as propriedades da análise.
   */
  to_dict () {
    return super.to_dict(this.#props)
  }

  

  validate () {
    const propsVerifyNumber = ['desiredBaseSaturation', 'currentBaseSaturation', 'totalCationExchangeCapacity', 'relativeTotalNeutralizingPower']

    propsVerifyNumber.forEach((prop) => {
      if (typeof this.#props[prop] !== 'number') {
        throw new TypeException(`${prop} must be a number`)
      }
    })

    if (typeof this.#props.fieldOfAnalysis !== 'string') {
      throw new TypeException('FieldOfAnalysis must be a string')
    }

    if (!validateUuid(this.#props.fieldOfAnalysis)) {
      throw new TypeException('FieldOfAnalysis must be a valid uuid')
    }
  }
}
