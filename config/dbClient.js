import mongoose from 'mongoose';

class DBClient {
    static isConnected = false; 

    static async connectDB() {
        if (DBClient.isConnected && mongoose.connection.readyState === 1) {
            return;
        }

        const connectionString = `mongodb+srv://beautygeekone:Arigato1324@apiutn.rvqc74d.mongodb.net/?appName=ApiUtn`;
        
        try {
            await mongoose.connect(connectionString, {
                dbName: 'Compras',
            });
            
            DBClient.isConnected = true;
            console.log("DB connected with Mongoose");

            mongoose.connection.on('error', err => {
                console.error('Mongoose connection error:', err);
            });

        } catch (e) {
            console.error("Error al conectar a MongoDB con Mongoose:", e);
            DBClient.isConnected = false;
            throw e; 
        }
    }

    static getDB() {
        if (mongoose.connection.readyState !== 1) {
             throw new Error("Base de datos no inicializada/conectada.");
        }
        return mongoose.connection.db; 
    }
    
    static async disconnectDB() {
        if (DBClient.isConnected) {
            await mongoose.disconnect();
            DBClient.isConnected = false;
            console.log("DB disconnected");
        }
    }
}

export default DBClient;