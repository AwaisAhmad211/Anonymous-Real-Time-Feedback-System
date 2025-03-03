import mongoose, { model } from "mongoose";

const userSchema = mongoose.Schema({
    username: {type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
},{Timestamp:true})

export default model("User",userSchema)