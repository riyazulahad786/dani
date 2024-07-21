import express from "express";
import dotenv from 'dotenv';
const app = express();
const PORT = 3000;
dotenv.config();
app.listen(PORT,()=>{
    console.log(`server in running at ${PORT}`)
})