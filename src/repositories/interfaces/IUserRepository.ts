import { AddUserModel } from "../../useCases/user/add/model";
import { ResponseImplementation } from "../../util/response";

export interface IUserRepository {
    save(data:AddUserModel):Promise<ResponseImplementation>
    fetch(email:string):Promise<ResponseImplementation>
    delete(id:string):Promise<ResponseImplementation>
}