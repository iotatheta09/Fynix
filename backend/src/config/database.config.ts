import {Env} from "./env.config";
import mongoose from "mongoose";

 const connectDatabase = async (): Promise<void> => {
    try {   
        await mongoose.connect(Env.MONGO_URI, {
      serverSelectionTimeoutMS: 8000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 30000,
    });
      
        console.log(
  `MongoDB Connected: ${mongoose.connection.host}`
);
    }

    catch (error) {
        console.error("Failed to connect to MongoDB", error);
        process.exit(1);
    }
};


export default connectDatabase;