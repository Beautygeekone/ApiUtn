import { MongoClient } from 'mongodb';

class dbClient {
    constructor() {
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}${process.env.SERVER_DB}/?appName=ApiUtn`;
        this.client = new MongoClient(queryString);
        this.connectBD();

    }    

    async connectBD() {
        try {
            await this.client.connect();
            this.db = this.client.db ('adopcion');
            console.log("DB connected");
        } catch (e) {
            console.log(e);
    
        }
    } 



} 

export default new dbClient();