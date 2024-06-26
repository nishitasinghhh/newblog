import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from '/Users/nishitasingh/Desktop/newblog/api/routes/user.route.js'
import authRoutes from '/Users/nishitasingh/Desktop/newblog/api/routes/auth.route.js'
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
app.use(express.json())
app.listen(4000,()=>{
    console.log("Server is running on port 6000 !!")
})
app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode|| 500
    const message=err.message|| "Internal Server Error"
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})