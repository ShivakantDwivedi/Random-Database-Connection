import connectDB from './db/dbindex.js'
import express from 'express'

import dotenv from 'dotenv'
dotenv.config()

const app = express()

connectDB()
.then( ()=> {
    app.listen(process.env.PORT || 7000 , ()=> {
        console.log(`Server running at ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("Error occurs" , error);
})