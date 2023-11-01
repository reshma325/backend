export const login = (req, res) => {
    res.send("Hi from login")
}

export const register = (req, res) => {
    try {
         console.log(req.body);
        // const { name, email, password } = req.body;
        // console.log(name, email, password);
   
        return res.status(200).json({ success: true, message: "Registration Successfull." })
    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
    //     try{
    //         console.log(req.body);
    //         // const {name,email,password}=req.body 
    // return res.status(200).json({success:true,message:"Registration Successful"})
    //     }catch(error){
    //         return res.status(500).json({
    //             success:false ,message:"Something went wrong"
    //         })
    //     }
}