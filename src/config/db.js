import mongoose from "mongoose";
import dotenv from 'dotenv'


dotenv.config({path:'../.env'})
const connectDB = async ()=>{
    try {
       await mongoose.connect(process.env.MONGO_URL,{
        // useNewUrlParser:true,
        // useUniFiedTopology:true
       });
       console.log("MongoDb connected");
    } catch (error) {
        console.error("MongoDB connection failed",error)
        process.exit(1);
    }
}

export default connectDB;