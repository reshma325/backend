import { Router } from "express";
import authRoutes from './Auth.routes.js'
import Productroutes from "./Products.routes.js"
import userRoutes from './User.Routes.js'


const router=Router();

router.use('/auth',authRoutes)
router.use('/product',Productroutes)
router.use('/user',userRoutes)
export default router;
