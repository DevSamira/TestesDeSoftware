import { DeleteUserUseCase } from "./useCase";
import { Request, Response } from "express";

export class DeleteUserController {
    constructor(private useCase:DeleteUserUseCase){}

    async handle(req:Request, res:Response){
        let result = await this.useCase.execute(req.body.id)
        if(result.has_error) return res.status(400).json(result)
        return res.status(200).json(result)
    }
}