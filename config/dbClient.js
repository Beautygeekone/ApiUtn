import { MongoClient } from 'mongodb';

class DBClient {
    static client = null;
    static db = null;

    static async connectBD() {
        if (DBClient.db) {
            return;
        }
        
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?appName=ApiUtn`;
        
        try {
            DBClient.client = new MongoClient(queryString);
            await DBClient.client.connect();
            
            DBClient.db = DBClient.client.db('Compras'); 
            
            console.log("DB connected");
        } catch (e) {
            console.error("Error al conectar a MongoDB:", e);
            throw e;
        }
    }

    static getDB() {
        if (!DBClient.db) {
            throw new Error("Base de datos no inicializada.");
        }
        return DBClient.db;
    }
}


export default DBClient;