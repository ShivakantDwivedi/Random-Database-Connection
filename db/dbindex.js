import mongoose from 'mongoose'

import dotenv from 'dotenv'

dotenv.config()

import {DB_NAME} from "../constrints.js"


const connectDB = (async () => {
    try {
        const mongoDb = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("Connected");
    } catch (error) {
        console.log(`Error occur  ${error}`);
    }
} )


export default connectDB