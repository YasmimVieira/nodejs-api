import mongoose from 'mongoose';
import {} from 'dotenv/config'

mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.kbknugi.mongodb.net`);

let db = mongoose.connection;

export default db;