import { Request, Response } from "express";
import { ResponseImplementation } from "../../../util/response";
import bcrypt from 'bcrypt'
import { EditProductUseCase } from "./useCase";

export class EditProductController {
    constructor(private useCase:EditProductUseCase){}

    async handle(req:Request, res:Response){
       try {
            let result = await this.useCase.execute(req.body);
            if(result.has_error) return res.status(400).json(result)
            return res.status(200).json(result)
       } catch (error) {
            return res.status(400).json(new ResponseImplementation("Algo deu errado ao se comunicar com o repositório", true, error.message))
       }
    }
   
}