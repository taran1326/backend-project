import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
// const MONGODB_URI = process.env.URI;


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected || DB Host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("ERROR !" , error);
        process.exit(1);
    }
}

export default connectDB;