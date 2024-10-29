import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controller.js";
import { verifytJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

//secured routes
router.route("/logout").post(verifytJWT, logoutUser);
