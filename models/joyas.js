import DBClient from '../config/dbClient.js';
import { ObjectId } from 'mongodb';

const joyasModel = {
   
    create: async (joya) => {
        const db = DBClient.getDB(); 
        const colJoyas = db.collection('joyas');
        
        return colJoyas.insertOne(joya);
    },
 async update (id, joya) {
          const colJoyas = db.collection('joyas');
        return await colJoyas.updateOne({_id: new ObjectId (id)}, {$set: joya});
},
    
    getAll: async () => {
        const db = DBClient.getDB(); 
        const colJoyas = db.collection('joyas');
        return await colJoyas.find({}).toArray();
   },

delete: async (id) => {
    const db = DBClient.getDB(); 
    const colJoyas = db.collection('joyas');
    return await colJoyas.deleteOne({ _id: new ObjectId(id) });
}, 


    getOne: async (id) => {
        const db = DBClient.getDB(); 
        const colJoyas = db.collection('joyas');
        return await colJoyas.findOne({_id: new ObjectId (id)});
    }
};

export default joyasModel;