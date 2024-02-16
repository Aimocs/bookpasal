import  Users from "../models/Users.js"
class UserController{
    async get(request,response){
        const userData = await Users.find();
        return  response.send(userData);
    }
    async post(request,response){
            const sR = new Users(request.body);
            await sR.save();
            return response.status(201).send(JSON.stringify({message:"Inserted"}));
    }
    async delete(request,response){
         const id = request.params.id
         await Users.deleteOne({_id:id});
         return response.send({id:id,message:"Deleted"})
    }
}
export default UserController;