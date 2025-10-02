import { Router } from "express";
import { syncUser } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/sync", syncUser);

export default userRouter;
