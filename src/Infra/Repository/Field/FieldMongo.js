import { Schema, model, connect, startSession } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'
import FieldRepository from '../../../Domain/Repositories/FieldRepositories/FieldRepository.js'
import { PropertyModel } from '../Property/PropertyMongo.js'

const FieldSchema = new Schema({
  idProperty: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  cultureOfPlants: {
    type: String,
    required: true
  },
  firstCoordinate: {
    type: Number,
    required: true
  },
  secondCoordinate: {
    type: Number,
    required: true
  },
  thirdCoordinate: {
    type: Number,
    required: true
  },
  fourthCoordinate: {
    type: Number,
    required: true
  },
  _id: {
    type: String,
    default: function genUUID () {
      return uuidv4()
    }
  }
}, { timestamps: true })

const FieldModel = model('field', FieldSchema)

/* const session = await startSession() */

export default class FieldMongo extends FieldRepository {
  async createConnection () {
    await connect('mongodb://127.0.0.1:27017/geeksforgeeks')
  }

  async save (field) {
    await this.createConnection()
    super.save(field)
    const fieldPersistency = new FieldModel({
      idProperty: field.get('idProperty'),
      name: field.get('name'),
      photo: field.get('photo'),
      owner: field.get('owner'),
      description: field.get('description'),
      cultureOfPlants: field.get('cultureOfPlants'),
      firstCoordinate: field.get('firstCoordinate'),
      secondCoordinate: field.get('secondCoordinate'),
      thirdCoordinate: field.get('thirdCoordinate'),
      fourthCoordinate: field.get('fourthCoordinate'),
      _id: field.get('id')
    })
    /* session.startTransaction() */
    await fieldPersistency.save(/* { session } */)
    const property = await PropertyModel.findById(field.get('idProperty'))
    await property.fields.push(fieldPersistency)
    await property.save()
    /* await session.commitTransaction() */
  }

  delete (field) {
    super.delete(field)
  }

  findByUserId (id) {
    super.findByUserId(id)
  }

  update (field) {
    super.update(field)
  }

  findAll () {
    return []
  }
}
