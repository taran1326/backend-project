import dotenv from 'dotenv';
// require('dotenv').config();
// import mongoose from "mongoose";
// import {DB_NAME} from './constants.js' ;
import connectDB  from "./db/index.js";

dotenv.config({
    path : './.env'
})

// console.log(process.env.URI)
connectDB();














// import express from 'express';
// const app = express();


// ( async ()=> {
//     try {
//         console.log(process.env.URI)
//         await mongoose.connect(`${process.env.URI}/${DB_NAME}`)
//         app.on("error" , (error) =>{
//             console.error(error);
//             throw error;
//         })

//         app.listen( 8000, () =>{
//             console.log(`App is listening on port ${8000}`);
//         })
//     }catch (error){
//         console.error("ERROR" , error);
//         throw error;
//     }
// })();