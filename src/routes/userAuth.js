import express from 'express';
import bcrypt from 'bcryptjs';
import user from '../models/user.js';

const router = express.Router();

router.post("/signIn", async (req,res)=>{
    try {
        const {username,email,password} = req.body;
        // console.log(username,email,password)
        const User = await user.findOne({email});
        console.log(User)

        // Existing User
        if(User) return res.status(400).json({"message":"User already exist"});
        
        // password hashing
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);

        // Create new user
        const newUser = new user({
            username,
            email,
            password:hashedPassword
        });
        newUser.save();
        res.status(201).send("user created")
        
    } catch (error) {
        res.status(500).send("something went wrong",error);
    }
})
router.post("/login", async (req,res)=>{
    try {
    const {email,password} = req.body;
    console.log(email,password)
    const User = await user.findOne({email})
    console.log(User)
    if(!User) res.status(400).send("wronge credentails");

    const isMatch = bcrypt.compare(password,user.password);
    if(!isMatch) res.status(400).send("wronge credentails")
    
    res.status(201).send("Done")   
    } catch (error) {
        res.status(501).send("something went wrong")
    } 
})

export default router