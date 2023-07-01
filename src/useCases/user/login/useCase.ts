import { IUserRepository } from "../../../repositories/interfaces/IUserRepository";
import { LoginUserModel } from "./model";


export class LoginUserUseCase {

    constructor(private repository:IUserRepository){}

    async execute(data:LoginUserModel){
        return await this.repository.fetch(data.email);
    }
}