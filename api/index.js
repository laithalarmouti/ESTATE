import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connection to Database is Successful')
}).catch((err)=>{
    console.log(err)
})


const app=express();




app.use('/api/user', userRouter)





app.listen(3000, ()=>{
    console.log(`Server is Listening to port 3000...`)
}
)
