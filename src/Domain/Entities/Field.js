import Entity from '../../__seedwork/Domain/Entity.js'
import { v4, validate as validateUuid } from 'uuid'
import TypeException from '../../__seedwork/Domain/Exceptions/TypeException.js'
import DomainException from '../Exceptions/DomainException.js'
import DomainValidator from '../Validators/DomainValidator.js'


export default class Field extends Entity {
    #props

    constructor(id, name, photo, owner, description, cultureOfPlants, firstCoordinate,secondCoordinate, thirdCoordinate, fourthCoordinate){
        super()
        this.#props = {
            id: id ? id : v4(),
            name,
            photo,
            owner,
            description,
            cultureOfPlants,
            firstCoordinate,
            secondCoordinate,
            thirdCoordinate,
            fourthCoordinate,
            created_at: new Date().toISOString(),
        }
        this.validate()
    }

    get (propName) {
        return this.#props[propName]
      }

    to_dict(){
        return super.to_dict(this.#props)
    }

    validate() {

        if (!validateUuid(this.get('id'))) {
            throw new Error('ID must be a valid UUID')
          }

        const propsVerifyString = ['name', 'photo', 'owner', 'description', 'cultureOfPlants']
        const propsVerifyNumber = ['firstCoordinate', 'secondCoordinate', 'thirdCoordinate', 'fourthCoordinate']

        for (const propName in propsVerifyString) {
            if (typeof this.get(propsVerifyString[propName])!=='string') {
                throw new TypeException(`${propsVerifyString[propName]} must be a string`)
            }
        }

        for (const propName in propsVerifyNumber) {
            if (typeof this.get(propsVerifyNumber[propName])!== 'number') {
                throw new TypeException(`${propsVerifyNumber[propName]} must be a number`)
            }
        }

        DomainValidator.str_is_not_empty(this.get('name'))
        DomainValidator.str_is_not_empty(this.get('owner'))
        DomainValidator.str_is_not_empty(this.get('firstCoordinate'))
        DomainValidator.str_is_not_empty(this.get('secondCoordinate'))
        DomainValidator.str_is_not_empty(this.get('thirdCoordinate'))
        DomainValidator.str_is_not_empty(this.get('fourthCoordinate'))

        let coordinatesVerify = ['firstCoordinate', 'secondCoordinate', 'thirdCoordinate', 'fourthCoordinate']
        
        coordinatesVerify = coordinatesVerify.map(coordinate => this.get(coordinate))
        
        const coordinatesWithoutRepeats = coordinatesVerify.filter((elemento, indice) => coordinatesVerify.indexOf(elemento) === indice)
        
        if (coordinatesWithoutRepeats.length !== coordinatesVerify.length) {
            throw new DomainException('Coordinates must be different')
        }

    
    }
}

