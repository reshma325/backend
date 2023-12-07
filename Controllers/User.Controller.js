import ProductModel from "../Models/Product.model.js"
import UserModel from "../Models/User.model.js"

export const addToCart = async (req, res) => {
    try {
        const { userId, ProductId } = req.body
        if (!userId || !ProductId) return res.status(404).json({ success: false, message: "User and Product are required" })
        const user = await UserModel.findById(userId)
        if (!user) return res.status(404).json({ success: false, message: "User not found.." })
        const cart = user.cart;
        cart.push(ProductId)
        await UserModel.findByIdAndUpdate(userId, { cart: cart })
        return res.status(201).json({ success: true, message: "added to cart" })

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}

export const viewCart = async (req, res) => {
    try {
        const { userId } = req.body

        if (!userId) return res.status(404).json({ success: false, message: "User and Product are required" })
        const user = await UserModel.findById(userId)

        const cart = user.cart;
        if (!user) {
            return res.status(404).json({ success: false, message: 'user not found' })
        } else {

            let display = []

            for (var i = 0; i < cart.length; i++) {

                const pro = await ProductModel.findById(cart[i])

                display.push(pro);

            }
          
            return res.status(200).json({ success: true, products: display })

        }


    } catch (error) {
        return res.status(500).json({ success: false, message: "something went wrong" })
    }
}
export const deletecartproducts=async(req,res)=>{
    try {
        const {userId,ProductId}=req.body
        if(!userId || !ProductId) return res.status(404).json({ success: false, message: "User and Product are required" })
        const user = await UserModel.findById(userId)
        if (!user) return res.status(404).json({ success: false, message: "User not found.." })
        const cart = user.cart;
        const index=user.cart.indexOf(ProductId);
    user.cart.splice(index,1)
    console.log(user.cart,"Help")
    await user.save()
    let display = []

    for (var i = 0; i < cart.length; i++) {

        const pro = await ProductModel.findById(cart[i])

        display.push(pro);

    }
    console.log(display,"jjjjj")
    return res.status(200).json({ success: true,message:"item removed successfully", products: display })

  

    } catch (error) {
        return res.status(500).json({ success: false, message: "something went wrong" })
    }

}
