import { Router } from "express";
import { AuthController } from "../controllers/user.controller";
import { Request,Response } from "express";
let authController = new AuthController();
const router = Router();
router.post("/register", (req, res) => authController.createUser(req, res));

router.post('/login', (req, res) => authController.loginUser(req, res))


router.get("/test", (req: Request, res: Response) => {
    res.send("User route working");
})

export default router;
