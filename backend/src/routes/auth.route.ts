import { Router } from "express";
import {
  loginController,
  registerController,
} from "../controllers/auth.controller";
import { asyncHandler } from "../middlewares/asyncHandler.middlerware";

const authRoutes = Router();

authRoutes.post("/register", asyncHandler(registerController));
authRoutes.post("/login", asyncHandler(loginController));

export default authRoutes;