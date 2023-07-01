import { IUserRepository } from "../../../../../repositories/interfaces/IUserRepository";
import { ResponseImplementation } from "../../../../../util/response";
import { AddUserModel } from "../../model";

export class UserRepositoryMock implements IUserRepository{
    data = []
    save(data: AddUserModel): Promise<ResponseImplementation> {
        try {
            if(data.name == undefined){
                return new Promise((resolve, reject) => {  
                    resolve( new ResponseImplementation("Houve um problema ao salvar o usuário", true));
                });
            }
            if(data.password == undefined){
                return new Promise((resolve, reject) => {  
                    resolve( new ResponseImplementation("Houve um problema ao salvar o usuário", true));
                });
            }
            if(data.phoneNumber == undefined){
                return new Promise((resolve, reject) => {  
                    resolve( new ResponseImplementation("Houve um problema ao salvar o usuário", true));
                });
            }
            if(data.email == undefined){
                return new Promise((resolve, reject) => {  
                    resolve( new ResponseImplementation("Houve um problema ao salvar o usuário", true));
                });
            }
            this.data.map(el => { 
                if(data.email == el.email){
                 throw new Error("E-mail já cadastrado")
                }
            })      
            this.data.push(data)
            return new Promise((resolve, reject) => {  
                resolve( new ResponseImplementation("Usuário registrado com sucesso!", false));
            });
        } catch (error) {
            return new Promise((resolve, reject) => {  
                resolve( new ResponseImplementation("Houve um problema ao salvar o usuário", true));
            });
        }
       
        
    }
    fetch(email: string): Promise<ResponseImplementation> {
        throw new Error("Method not implemented.");
    }  
}