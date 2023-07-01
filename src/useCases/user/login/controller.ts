import { Request, Response } from "express";
import { ResponseImplementation } from "../../../util/response";
import bcrypt from 'bcrypt';
import { LoginUserUseCase } from "./useCase";
import jwt from 'jsonwebtoken';
import { listProductUseCase } from "../../product/list";

export class LoginUserController {
    constructor(private useCase:LoginUserUseCase ){}

    async handle(req:Request, res:Response){
        try {
            let result = await this.useCase.execute(req.body)
            if(result.data == null) return res.cookie('errorLogin',"true").redirect("/")
            let isValidPassword = await bcrypt.compareSync(req.body.password, result.data.password)
            if(isValidPassword == false) return res.cookie('errorLogin',"true").redirect("/")
            let payload = {
                email:result.data.email,
                id:result.data.id
            }
            let token = await jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:'1h'} );
            res.setHeader("authorization", token);
            let products = await listProductUseCase.execute();
            return res.render("home", {user: result.data, products:products.data}); 
        } catch (error) {
            return new ResponseImplementation("Houve um erro durante o login.", true, error.message)
        }
    }
    
}