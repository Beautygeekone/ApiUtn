import 'dotenv/config';
import express from 'express';
import routesJoyas from './routes/joyas.js';

const app = express();
app.use('/joyas', routesJoyas);

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port`, PORT))
    
} catch (e) {
   console.log(e); 
}


