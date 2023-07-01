import { IUserRepository } from "../../../repositories/interfaces/IUserRepository";
import { AddUserModel } from "./model";

export class AddUserUseCase {

    constructor(private repository:IUserRepository){}

    async execute(data:any){
        return await this.repository.save(data);
    }
}