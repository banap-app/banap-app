import DomainException from '../Exceptions/DomainException.js'
import TypeException from '../../__seedwork/Domain/Exceptions/TypeException.js'
import Entity from '../../__seedwork/Domain/Entity.js'
import { v4, validate as validateUuid } from 'uuid'

export default class Analysis extends Entity {
  #props

  constructor (
    id,
    idField,
    desiredBaseSaturation,
    currentBaseSaturation,
    totalCationExchangeCapacity,
    relativeTotalNeutralizingPower
  ) {
    super()
    this.#props = {
      id: id ? id : v4(),
      idField,
      desiredBaseSaturation,
      currentBaseSaturation,
      totalCationExchangeCapacity,
      relativeTotalNeutralizingPower,
      liming: null,
      phosphor: null,
      potassium: null,
      expectedProductivity: null,
      nitrogen: null
    }
    this.validate()
  }

  get (propName) {
    return this.#props[propName]
  }

  set (propName, value) {
    this.#props[propName] = value
  }

  calculateLiming () {
    const liming = (this.get('desiredBaseSaturation') - this.get('currentBaseSaturation')) * this.get('totalCationExchangeCapacity') / this.get('relativeTotalNeutralizingPower')
    this.set('liming', liming)
    return (liming.toFixed(3) * 100).toFixed(1)
  }

  calculateNPK (phosphor, potassium, expectedProductivity) {
    this.set('expectedProductivity', expectedProductivity)
    if (expectedProductivity > 50) {
      this.set('nitrogen', 410)
      if (potassium < 1.6) {
        this.set('potassium', 800)
      }

      if (potassium >= 1.6 && potassium <= 3.0) {
        this.set('potassium', 950)
      }

      if (potassium > 3.0) {
        this.set('potassium', 750)
      }

      if (phosphor < 16) {
        this.set('phosphor', 240)
      }

      if (phosphor > 16 && phosphor <= 40) {
        this.set('phosphor', 150)
      }

      if (phosphor > 40) {
        this.set('phosphor', 120)
      }
    } else if (expectedProductivity >= 40 && expectedProductivity <= 50) {
      this.set('nitrogen', 340)
      if (potassium < 1.6) {
        this.set('potassium', 800)
      }

      if (potassium >= 1.6 && potassium <= 3.0) {
        this.set('potassium', 750)
      }

      if (potassium > 3.0) {
        this.set('potassium', 550)
      }

      if (phosphor < 16) {
        this.set('phosphor', 220)
      }

      if (phosphor > 16 && phosphor <= 40) {
        this.set('phosphor', 130)
      }

      if (phosphor > 40) {
        this.set('phosphor', 110)
      }
    } else if (expectedProductivity >= 30 && expectedProductivity < 40) {
      this.set('nitrogen', 260)
      if (potassium < 1.6) {
        this.set('potassium', 800)
      }

      if (potassium >= 1.6 && potassium <= 3.0) {
        this.set('potassium', 550)
      }

      if (potassium > 3.0) {
        this.set('potassium', 350)
      }
      if (phosphor < 16) {
        this.set('phosphor', 200)
      }

      if (phosphor > 16 && phosphor <= 40) {
        this.set('phosphor', 110)
      }

      if (phosphor > 40) {
        this.set('phosphor', 80)
      }
    } else if (expectedProductivity >= 20 && expectedProductivity < 30) {
      this.set('nitrogen', 190)
      if (potassium < 1.6) {
        this.set('potassium', 600)
      }

      if (potassium >= 1.6 && potassium <= 3.0) {
        this.set('potassium', 350)
      }

      if (potassium > 3.0) {
        this.set('potassium', 150)
      }
      if (phosphor < 16) {
        this.set('phosphor', 180)
      }

      if (phosphor > 16 && phosphor <= 40) {
        this.set('phosphor', 90)
      }

      if (phosphor > 40) {
        this.set('phosphor', 60)
      }
    } else {
      this.set('nitrogen', 110)
      if (potassium < 1.6) {
        this.set('potassium', 400)
      }

      if (potassium >= 1.6 && potassium <= 3.0) {
        this.set('potassium', 150)
      }

      if (potassium > 3.0) {
        this.set('potassium', 100)
      }

      if (phosphor < 16) {
        this.set('phosphor', 160)
      }

      if (phosphor > 16 && phosphor <= 40) {
        this.set('phosphor', 70)
      }

      if (phosphor > 40) {
        this.set('phosphor', 40)
      }
    }
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
      if (typeof this.get(prop) !== 'number') {
        throw new TypeException(`${prop} must be a number`)
      }
    })

    if (!validateUuid(this.get('id'))) {
      throw new TypeException('ID must be a valid ID')
    }

    if (!validateUuid(this.get('idField'))) {
      throw new TypeException('idField must be a valid ID')
    }
  }
}
