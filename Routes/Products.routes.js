import { Router } from "express";
import { CheckUserId } from "../Middlewares/AllMiddlewares.js";
import { YourProducts, addProduct, deleteProduct, fillterProdcuts, getAllProducts, getSingleProduct, paginatedProducts, sortedProducts, updateProduct } from "../Controllers/Products.controller.js";
import bodyParser from 'body-parser';
var jsonParser = bodyParser.json()

const router = Router();
router.post('/fillter' ,jsonParser,fillterProdcuts)
router.get('/getsingleproduct', jsonParser,getSingleProduct)
router.post('/addproduct',jsonParser,CheckUserId,addProduct)
router.get('/getallproducts', jsonParser,getAllProducts)
router.get('/filterProducts',jsonParser,fillterProdcuts)
router.get('/paginateProducts',jsonParser,paginatedProducts)
router.get('/sortProducts',jsonParser,sortedProducts)
router.post('/your_products',jsonParser,YourProducts)
router.post('/update_product',jsonParser,updateProduct)
router.delete('/delete_product',jsonParser,deleteProduct)
export default router;