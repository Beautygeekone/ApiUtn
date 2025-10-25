import DBClient from '../config/dbClient.js';
import { ObjectId } from 'mongodb';

const joyasModel = {
  async create(joya) {
    const db = DBClient.getDB();
    const colJoyas = db.collection('joyas');
    return await colJoyas.insertOne(joya);
  },

  async update(id, joya) {
    const db = DBClient.getDB(); // ✅ agregado
    const colJoyas = db.collection('joyas');
    return await colJoyas.updateOne({ _id: new ObjectId(id) }, { $set: joya });
  },

  async getAll() {
    const db = DBClient.getDB();
    const colJoyas = db.collection('joyas');
    return await colJoyas.find({}).toArray();
  },

  async delete(id) {
    const db = DBClient.getDB();
    const colJoyas = db.collection('joyas');
    return await colJoyas.deleteOne({ _id: new ObjectId(id) });
  },

  async getOne(id) {
    const db = DBClient.getDB();
    const colJoyas = db.collection('joyas');
    return await colJoyas.findOne({ _id: new ObjectId(id) });
  }
};

export default joyasModel;
