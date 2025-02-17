//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from './db/index.js';
import {app} from './app.js'

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log("server is running on the port 3000")
    })
})
.catch((err)=>{
    console.log("Connection failed",err)
})

