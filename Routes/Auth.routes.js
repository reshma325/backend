import { Router } from "express";
import { getCurrentUser, login,register } from "../Controllers/Auth.controller.js";

import {CheckUserId} from '../Middlewares/AllMiddlewares.js'

 
// create application/json parser
// var jsonParser = bodyParser.json()

const router = Router();
router.post('/login',login )
router.post('/register',register)
router.post('/get-current-user',getCurrentUser)

export default router;