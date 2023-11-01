import { Router } from "express";
import { getCurrentUser, login,register } from "../Controllers/Auth.controller.js";
import bodyParser from 'body-parser';
 
// create application/json parser
var jsonParser = bodyParser.json()


const router = Router();
router.post('/login',jsonParser,login )
router.post("/register", jsonParser,register)
router.post('/get-current-user',jsonParser,getCurrentUser)

export default router;