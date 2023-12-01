import ProductModel from "../Models/Product.model.js"
import UserModel from "../Models/User.model.js"

export const addToCart = async (req, res) => {
    try {
        const { userId, ProductId } = req.body
        if (!userId || !ProductId) return res.status(404).json({ success: false, message: "User and Product are required" })
        const user = await UserModel.findById(userId)
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
            console.log(display, "18.44")
            return res.status(200).json({ success: true, products: display })

        }


    } catch (error) {
        return res.status(500).json({ success: false, message: "smething went wrong" })
    }
}
