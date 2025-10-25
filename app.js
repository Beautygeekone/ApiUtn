import 'dotenv/config';
import express from 'express';
import DBClient from './config/dbClient.js';
import routesJoyas from './routes/productRoute.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function startServer() {
    try {
        await DBClient.connectBD();
        
        const PORT = process.env.PORT || 3000;
        
        app.use('/api/joyas', routesJoyas);


        app.listen(PORT, () => console.log('Server running on port', PORT));
        
    } catch (e) {
        console.log(e); 
    }
}

startServer();