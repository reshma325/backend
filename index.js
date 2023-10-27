import express from 'express';
import { Hello } from './Controllers/GlobalControllers.js';
import router from './Routes/index.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import morgan from 'morgan';
// import {Hello} from './'
const app= express();


dotenv.config()
app.get("/",function(req,res,next){
    res.send("Hello from index.js")
    next();

})

app.get("/Hello",Hello);
app.use(morgan('dev'))
app.use('/api/v1',router)


mongoose.connect(process.env.MONGOURL).then(()=>console.log("Database Connected"))
// app.get('/hello',Hello)
app.listen(8000 ,()=>console.log('Hi'));