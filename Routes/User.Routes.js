import { Router } from "express";

import { addToCart, deletecartproducts, viewCart} from "../Controllers/User.Controller.js";


const router = Router();
router.post('/addtocart',addToCart)
router.post('/viewcart',viewCart)
router.post('/deletecartproducts',deletecartproducts)

export default router;