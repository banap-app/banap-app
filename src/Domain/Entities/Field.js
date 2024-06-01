import Entity from '../../__seedwork/Domain/Entity.js'
import { v4, validate as validateUuid } from 'uuid'
import TypeException from '../../__seedwork/Domain/Exceptions/TypeException.js'
import DomainException from '../Exceptions/DomainException.js'
import DomainValidator from '../Validators/DomainValidator.js'

export default class Field extends Entity {
  #props

  constructor (
    id,
    idProperty,
    name,
    photo,
    ownerId,
    description,
    cultureOfPlants,
    firstCoordinate,
    secondCoordinate,
    thirdCoordinate,
    fourthCoordinate
  ) {
    super()
    this.#props = {
      id: id ? id : v4(),
      idProperty,
      name,
      photo,
      ownerId,
      description,
      cultureOfPlants,
      firstCoordinate,
      secondCoordinate,
      thirdCoordinate,
      fourthCoordinate,
      created_at: new Date().toISOString()
    }
    this.validate()
  }

  get (propName) {
    return this.#props[propName]
  }

  to_dict () {
    return super.to_dict(this.#props)
  }

  validate () {
    if (!validateUuid(this.get('id'))) {
      throw new DomainException('ID must be a valid UUID')
    }

    if (!validateUuid(this.get('idProperty'))) {
      throw new DomainException('Property ID must be a valid UUID')
    }

    if (!validateUuid(this.get('ownerId'))) {
      throw new DomainException('Owner ID must be a valid UUID')
    }

    const propsVerifyString = [
      'name',
      'photo',
      'ownerId',
      'description',
      'cultureOfPlants'
    ]
    const propsVerifyNumber = [
      'firstCoordinate',
      'secondCoordinate',
      'thirdCoordinate',
      'fourthCoordinate'
    ]

    for (const propName in propsVerifyString) {
      if (typeof this.get(propsVerifyString[propName]) !== 'string') {
        throw new TypeException(
          `${propsVerifyString[propName]} must be a string`
        )
      }
    }

    for (const propName in propsVerifyNumber) {
      if (typeof this.get(propsVerifyNumber[propName]) !== 'number') {
        throw new TypeException(
          `${propsVerifyNumber[propName]} must be a number`
        )
      }
    }

    DomainValidator.str_is_not_empty(this.get('name'))
    DomainValidator.str_is_not_empty(this.get('owner'))
    DomainValidator.str_is_not_empty(this.get('firstCoordinate'))
    DomainValidator.str_is_not_empty(this.get('secondCoordinate'))
    DomainValidator.str_is_not_empty(this.get('thirdCoordinate'))
    DomainValidator.str_is_not_empty(this.get('fourthCoordinate'))

    let coordinatesVerify = [
      'firstCoordinate',
      'secondCoordinate',
      'thirdCoordinate',
      'fourthCoordinate'
    ]

    coordinatesVerify = coordinatesVerify.map((coordinate) =>
      this.get(coordinate)
    )

    const coordinatesWithoutRepeats = coordinatesVerify.filter(
      (element, index) => coordinatesVerify.indexOf(element) === index
    )

    if (coordinatesWithoutRepeats.length !== coordinatesVerify.length) {
      throw new DomainException('Coordinates must be different')
    }
  }
}
