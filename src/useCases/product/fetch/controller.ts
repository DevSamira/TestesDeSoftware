import { Request, Response } from "express";
import { ResponseImplementation } from "../../../util/response";
import bcrypt from 'bcrypt'
import { FetchProductUseCase } from "./useCase";


export class FetchProductController {
    constructor(private useCase:FetchProductUseCase){}

    async handle(req:Request, res:Response){
       try {
          let obj = {id:req.params.id}
            let result = await this.useCase.execute(obj);
            if(result.has_error) return res.status(400).json(result)
            return res.status(200).json(result)
       } catch (error) {
            return res.status(400).json(new ResponseImplementation("Algo deu errado ao se comunicar com o repositório", true, error.message))
       }
    }
   
}