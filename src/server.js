// const express = require('express');
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
const app = express();

connectDB()

dotenv.config({path:"../.env"});
app.get("/",(req,res)=>{
    res.send("Home Page");
})


const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Srever is listing on port ${port}`)
});