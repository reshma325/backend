import { Router } from "express";
import { login } from "../Controllers/Auth.controller.js";

const router = Router();
router.get('/login',login )

export default router;