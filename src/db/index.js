import mongoose from 'mongoose';
import {DB_NAME} from '../constants.js';

const connectDB = async () => {

    try {
        // Debugging: This will tell you if the URI is actually being read
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log(`MonogoDB is connected!! DB Host: ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log("MongoDB connection FAILED", error)
        process.exit(1);
        
    }
}

export default connectDB;



