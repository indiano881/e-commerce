import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
export const connectToDatabase = async () => {
    try {
        mongoose.set("strictQuery", false)
        const connect= await mongoose.connect("mongodb+srv://d.baldi88:Changemaker.01@cluster0.gjnwqd3.mongodb.net/")
        console.log(`MongoDb Connected: ${connect.connection.host}`)
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}