import { Router } from "express";
import { AuthController } from "../controllers/user.controller";

let authController = new AuthController();
const router = Router();
router.post("/register", (req, res) => authController.createUser(req, res));

export default router;
