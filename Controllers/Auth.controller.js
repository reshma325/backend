
import UserModel from "../Models/User.model.js";
import bcrypt from "bcrypt"
import JWT from "jsonwebtoken"

export const login = async (req, res) => {

    try {
        const { email, password } = req.body.userData;
        if (!email || !password)
            return res.status(401).json({ success: false, message: "Please provide Valid Credentials" })
        const user = await UserModel.findOne({ email: email })
        // console.log(user,"user")
        if (!user) return res.status(401).json({ success: false, message: "Please provide valid email" })

        if (password !== user.password) {
            return res.status(401).json({
                success: false, message: "please provide valid password"

            })

        }
        const token = await JWT.sign({ id: user.id }, process.env.JWT_SECRET)

        return res.status(200).json({ success: true, message: "logged in successfully", user: { name: user.name, id: user.id }, token })


    } catch (error) {
        return res.status(500).json({ success: false, message: error })
    }

}

export const register = async (req, res) => {

    try {
        // console.log(req);
        const { name, email, password } = req.body.userData

        // console.log(name,email,password)

        if (!name || !email || !password)
            return res.status(401).json({ success: false, message: "All Fields are Mandetory" })
        const hashedPassword = await bcrypt.hash(password, 10)
        // console.log(hashedPassword)

        const user = new UserModel(
            { name: name, email, password: hashedPassword })
        await user.save();

        return res.status(200).json({ success: true, message: "Registration Successful" })
    } catch (error) {
        return res.status(500).json({
            success: false, message: "Something went wrong"
        })
    }
}

export const getCurrentUser = async (req, res) => {    console.log("Hi")
    try {
        const { token } = req.body;
        console.log(token,"________")
        if (!token) return res.status(401).json({
            success: false, message: "token is required"
        })
        const { id } = await JWT.verify(token, process.env.JWT_SECRET)
        console.log(id)
        const user = await UserModel.findById(id);
        if (!user) return res.status(401).json({
            success: false, message: "user not found!!!"
        })
        return res.status(200).json({ success: true, user: { name: user.name, id: user.id } })
    }
    catch (error) {
        return res.status(500).json({ success: false, message: error })
    }
}