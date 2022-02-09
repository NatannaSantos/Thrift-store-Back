import { Router } from "express";
import { createdProduct, getProduct } from "../controllers/productsController.js";

const productsRouter=Router();
productsRouter.post('/Products',createdProduct);
productsRouter.get('/products',getProduct);

export default productsRouter;