import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://livraria:senha123@cluster0.kbknugi.mongodb.net");

let db = mongoose.connection;

export default db;