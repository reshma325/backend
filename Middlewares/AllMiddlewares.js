import UserModel from "../Models/User.model.js";
 export const CheckUserId= async(req,res,next)=>{
    try {
        const {id}=req.body;
        const user= await UserModel.findById(id);
        // console.log(user)
        if (user) {
            next();
        } else {
         return res.status(404).json({success:false, message:"User Not Found!"})   
        }
    } catch (error) {
        return res.status(500).json({success:false,message:error.message})
        
    }
}