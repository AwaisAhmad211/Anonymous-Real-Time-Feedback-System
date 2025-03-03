// import packeges
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

// import files 
import connectDB from './config/db.js'
import router from '../src/routes/userAuth.js'


const app = express();



// Database Connection
connectDB()
app.use(express.json());
app.use(cors());

dotenv.config({path:"../.env"});
app.get("/",(req,res)=>{
    res.send("Home Page");
})
app.use("/api/auth",router);

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Srever is listing on port ${port}`)
});