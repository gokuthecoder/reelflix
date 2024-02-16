import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "./constant";
import express from "express"
import db from './db/index.js'

const app = express()

/* ; (async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error)=>{
        console.log("ERR", error);
        throw error
       })

       app.listen(process.env.PORT, (err)=>{
        console.log(`App is listening on port ${process.env.PORT}`)
       })
    } catch(error){
        console.log("ERROR", error)
    }
})() */