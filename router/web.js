import userRoute from "./UsersRouter.js";
import express from "express";

const web=express.Router();
web.get('/',(request, response)=>{
    response.send("STILL Learning");
})
web.use('/users',userRoute)

export  default web;