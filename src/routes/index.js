import { Router } from "express";
import authRouter from "./authRouter.js";
import productsRouter from "./productsRouter.js";
import userRouter from "./userRouter.js";

const router=Router();
router.use(productsRouter);
router.use(authRouter);
router.use(userRouter);

export default router;