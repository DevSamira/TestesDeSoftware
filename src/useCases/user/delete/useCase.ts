import { IUserRepository } from "../../../repositories/interfaces/IUserRepository";

export class DeleteUserUseCase{
    constructor(private repository:IUserRepository){}
    async execute(data:any){
       return await this.repository.delete(data);
    }

}