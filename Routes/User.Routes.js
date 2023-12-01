import { Router } from "express";

import { addToCart, viewCart} from "../Controllers/User.Controller.js";


const router = Router();
router.post('/addtocart',addToCart)
router.post('/viewcart',viewCart)

export default router;