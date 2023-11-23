import { Router } from "express";
import { CheckUserId } from "../Middlewares/AllMiddlewares.js";
import { addProduct, fillterProdcuts, getAllProducts, getSingleProduct, paginatedProducts, sortedProducts } from "../Controllers/Products.controller.js";
import bodyParser from 'body-parser';
var jsonParser = bodyParser.json()

const router = Router();
router.post('/fillter' ,jsonParser,fillterProdcuts)
router.get('/getsingleproduct', jsonParser,getSingleProduct)
router.post("/addproduct",jsonParser,CheckUserId,addProduct)
router.get('/getallproducts', jsonParser,getAllProducts)
router.get('/filterProducts',jsonParser,fillterProdcuts)
router.get('/paginateProducts',jsonParser,paginatedProducts)
router.get("/sortProducts",jsonParser,sortedProducts)
export default router;