import DBClient from '../config/dbClient.js';
import { ObjectId } from 'mongodb';

const joyasModel = {
   
    create: (joya) => {
        const db = DBClient.getDB(); 
        const colJoyas = db.collection('joyas');
        
        return colJoyas.insertOne(joya);
    },
    
    async getAll () {
        const db = DBClient.getDB(); 
        const colJoyas = db.collection('joyas');
        return await colJoyas.find({}).toArray();
   }
};

export default joyasModel;