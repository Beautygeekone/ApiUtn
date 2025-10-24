import DBClient from '../ruta/a/dbClient.js'; 

const joyasModel = {
    create: (data) => {
        const db = DBClient.getDB(); 
        const colJoyas = db.collection('joyas');
        
        return colJoyas.insertOne(data);
    }
    // Implementar acá getAll, getOne, update y delete
};

export default joyasModel;