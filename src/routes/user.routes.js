import express from "express";
import { register, login, logout, deleteUser } from "../controllers/user.controller.js";
import { authentication } from "../middlewares/middleware.js";

const userRouter = express.Router();

userRouter.post("/register", register); 
userRouter.post("/login",login);
userRouter.post("/logout", logout);
userRouter.delete("/:id",deleteUser);

export default userRouter;
