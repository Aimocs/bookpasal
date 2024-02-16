
import express from "express";
import cors from 'cors';
import connection from "./database/connection.js";
import dotenv from 'dotenv';
import web from "./router/web.js";
dotenv.config();
const app = express();
app.use(cors());
connection();
app.use(express.json());
app.use('/',web);
const port= process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`SERVER START ${port}`);
})