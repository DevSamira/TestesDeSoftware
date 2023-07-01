import { Router } from "express";
import { Request, Response } from "express";
import { addUserController } from "../../useCases/user/add";
import { loginUserController } from "../../useCases/user/login";
import bodyParser from "body-parser";
import { deleteUserController } from "../../useCases/user/delete";
const userRoutes = Router();
userRoutes.use(bodyParser.urlencoded({ extended: false }))

userRoutes.post("/user", async (req:Request, res:Response) => {
    return await addUserController.handle(req, res);
});
userRoutes.post("/login", async (req:Request, res:Response) => {
    return await loginUserController.handle(req, res);
});
userRoutes.delete("/user", async (req:Request, res:Response) => {
    return await deleteUserController.handle(req, res);
});

export {userRoutes};