import { Schema, model } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'
import PropertyRepository from '../../../Domain/Repositories/PropertyRepositories/PropertyRepository.js'
import { connect } from 'mongoose'

const PropertySchema = new Schema({
  fields: [{
    type: String,
    ref: 'field'
  }],
  name: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  _id: {
    type: String,
    default: function genUUID() {
      return uuidv4()
    }}
}, { timestamps: true })

export const PropertyModel = model('property', PropertySchema)

export default class PropertyMongo extends PropertyRepository {
  async createConnection () {
    await connect('mongodb://127.0.0.1:27017/geeksforgeeks', {
    })
  }

  async save (property) {
    await this.createConnection()
    super.save(property)
    const propertyPersistent = new PropertyModel({
      name: property.get('name'),
      owner: property.get('ownerId'),
      _id: property.get('id')
    })
    propertyPersistent.save()
  }

  async delete (property) {
    super.delete(property)
  }

  async findByIdUser (idOwner) {
    await this.createConnection()
    super.findByIdUser(idOwner)
    console.log(idOwner)
    const property = await PropertyModel.find({ owner: idOwner })
    return property
  }

  async findByPropertyId (idProperty) {
    await this.createConnection()
    super.findByPropertyId(idProperty)
    const property = await PropertyModel.findById(idProperty)
    return property
  }

  async update (property) {
    super.update(property)
  }
}
