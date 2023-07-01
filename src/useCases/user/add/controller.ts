import { Request, Response } from "express";
import { AddUserUseCase } from "./useCase";
import { ResponseImplementation } from "../../../util/response";
import { AddUserModel } from "./model";
import bcrypt from 'bcrypt'
export class AddUserController {
    constructor(private useCase:AddUserUseCase ){}

    async handle(req:Request, res:Response){
        let encrypted = await this.enryptPassword(req.body)
        if(encrypted.has_error) return res.status(400).json(encrypted);
        let result = await this.useCase.execute(encrypted.data);
        if(result.has_error) return res.status(400).json(result);
        return res.status(200).json(result);
    }
    async enryptPassword(data:AddUserModel){
        try {
            
            let isAGoodPassword = this.verifyPassword(data)
            if(isAGoodPassword.has_error) return isAGoodPassword
            let isAGoodEmail = this.verifyEmail(data)
            if(isAGoodEmail.has_error) return isAGoodEmail
            data.password = await bcrypt.hash(data.password, 12);
            return new ResponseImplementation(data, false)
        } catch (error) {
            return new ResponseImplementation("Houve um erro ao encriptar a senha.", true, error.message)
        }
    }
    verifyPassword(data:AddUserModel){
        try {
            let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
            if(pattern.test(data.password) == true) return new ResponseImplementation(data, false)
            return new ResponseImplementation("Senha fraca", true)
        } catch (error) {
            return new ResponseImplementation("Houve algum problema ao validar senha.", true, error.message)
        }      
    }   
    verifyEmail(data:AddUserModel){
        try {
            let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
            if(pattern.test(data.email) == true) return new ResponseImplementation(data, false)
            return new ResponseImplementation("Email inválido", true)
        } catch (error) {
            return new ResponseImplementation("Houve algum problema ao validar o e-mail.", true)
        }
    }
}