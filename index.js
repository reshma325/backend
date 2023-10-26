import express from 'express';
import { Hello } from './Controllers/GlobalControllers.js';
import router from './Routes/index.js';
// import {Hello} from './'
const app= express();


app.get("/",function(req,res){
    res.send("Hello from index.js")

})

app.get("/Hello",Hello);

app.use('/api/v1',router)
// app.get('/hello',Hello)
app.listen(8000 ,()=>console.log('Hi'));