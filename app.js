import 'dotenv/config'; 
import express from 'express';
import DBClient from './config/dbClient.js';
import routesJoyas from './routes/productRoute.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function startServer() {
    try {
        await DBClient.connectDB();
        const PORT = process.env.PORT || 3000;
        
        app.use('/api/joyas', routesJoyas);

        app.listen(PORT, () => console.log('Server running on port', PORT));
        
    } catch (e) {
        console.error("Fallo al iniciar el servidor o conectar a la DB:", e); 
        process.exit(1); 
    }
}

process.on('SIGINT', async () => {
    console.log('\nCerrando conexión a la base de datos...');
    await DBClient.disconnectDB();
    
    process.exit(0);
});

startServer();