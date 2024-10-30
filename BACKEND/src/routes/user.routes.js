import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
} from "../controllers/user.controller.js";
import { verifytJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

//secured routes
router.route("/logout").post(verifytJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);

export default router;
