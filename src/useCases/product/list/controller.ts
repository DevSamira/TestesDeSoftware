import { Request, Response } from "express";
import { ResponseImplementation } from "../../../util/response";
import bcrypt from 'bcrypt'
import { ListProductUseCase } from "./useCase";

export class ListProductController {
    constructor(private useCase:ListProductUseCase){}

    async handle(req:Request, res:Response){
       try {
            let result = await this.useCase.execute();
            if(result.has_error) return res.status(400).json(result)
            return res.status(200).json(result)
       } catch (error) {
            return res.status(400).json(new ResponseImplementation("Algo deu errado ao se comunicar com o repositório", true, error.message))
       }
    }
   
}