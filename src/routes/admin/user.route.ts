import { AdminUserController } from "../../controllers/admin/user.controller";
import { Request,Response } from "express";
import { authorizedMiddleware } from "../../middlewares/authorized.middleware";

let adminUserController = new AdminUserController

const router = require("express").Router();

router.post("/create-user",adminUserController.createUser);
router.get("/get-user/:id",adminUserController.getOneUser);

router.get("/get-all-users",adminUserController.getAllUsers);


//route for login 


router.get("/test", authorizedMiddleware,(req: Request, res: Response) => {
    res.send("User route working");
})



export default router;