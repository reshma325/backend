import { Router } from "express";
import authRoutes from './Auth.routes.js'
import Productroutes from "./Products.routes.js"


const router=Router();

router.use('/auth',authRoutes)
router.use('/product',Productroutes)
export default router;
