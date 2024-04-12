import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from '/Users/nishitasingh/Desktop/newblog/api/routes/user.route.js'
dotenv.config();
mongoose.connect(
    process.env.MONGO
).then(
    ()=>{
        console.log("mongo db is connected")
    }
).catch(err=>{
    console.log(err)
})
const app=express();
app.listen(4000,()=>{
    console.log("Server is running on port 6000 !!")
})
app.use('/api/user',userRoutes)