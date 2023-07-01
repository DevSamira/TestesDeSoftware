import { Router } from "express";
import { Request, Response } from "express";
import { addProductController } from "../../useCases/product/add";
import { listProductController } from "../../useCases/product/list";
import { deleteProductController } from "../../useCases/product/delete";
import { fetchProductController } from "../../useCases/product/fetch";
import { editProductController } from "../../useCases/product/edit";
const productRoutes = Router();

productRoutes.post("/product", async (req:Request, res:Response)=>{
    return await addProductController.handle(req, res);
}) 
productRoutes.get("/product", async (req:Request, res:Response)=>{
    return await listProductController.handle(req, res);
})  
productRoutes.get("/product/:id", async (req:Request, res:Response)=>{
    return await fetchProductController.handle(req, res);
}) 
productRoutes.delete("/product", async (req:Request, res:Response)=>{
    return await deleteProductController.handle(req, res);
})  
productRoutes.put("/product", async (req:Request, res:Response)=>{
    return await editProductController.handle(req, res)
})


export {productRoutes}