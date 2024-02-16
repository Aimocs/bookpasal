import mongoose from "mongoose";
const connection = async ()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/bookstore');
        console.log("connected to the DB")
    } catch(error){
        console.log("Error connecting to DB")
    }
}
export default connection;