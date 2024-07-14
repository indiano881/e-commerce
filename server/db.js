import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
export const connectToDatabase = async () => {
    try {
        mongoose.set("strictQuery", false)
        const connect= await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDb Connected: ${connect.connection.host}`)
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}