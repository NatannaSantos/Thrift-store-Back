import {Router} from "express";
import { login } from "../controllers/authController.js";
import { validateLoginSchema } from "../middlewares/validateLoginSchema.js";

const authRouter=Router();
authRouter.post('/auth/login',validateLoginSchema,login);

export default authRouter;