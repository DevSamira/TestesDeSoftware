import { Router } from "express";
import { userRoutes } from "./user/routes";
import { Request, Response } from "express";
import { productRoutes } from "./product/routes";
const routes = Router();
routes.get("/", async (req:Request, res:Response)=>{
    res.render("index");
})
routes.use(userRoutes);
routes.use(productRoutes)

export {routes};