import {Router} from "express";
import { register } from "../controllers/userController.js";
import { validateUserSchema } from "../middlewares/validateUserSchema.js";

const userRouter=Router();
userRouter.post('/auth/register',validateUserSchema,register);

export default userRouter;