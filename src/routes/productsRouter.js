import { Router } from "express";
import { createdProduct, getProducts, getProduct, checkout } from "../controllers/productsController.js";

const productsRouter=Router();
productsRouter.post('/products',createdProduct);
productsRouter.get('/products',getProducts);
productsRouter.get('/product/:id',getProduct);
productsRouter.post('/checkout', checkout);


export default productsRouter;