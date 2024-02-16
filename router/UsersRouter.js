import UserController from "../controller/UsersController.js";
import express from "express";

const userRoute= express.Router();
const userInstance = new UserController();

userRoute.get('/',userInstance.get);
userRoute.post('/',userInstance.post);
userRoute.delete('/:id',userInstance.delete);

export default userRoute;