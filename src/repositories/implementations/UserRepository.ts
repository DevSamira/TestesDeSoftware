import { prisma } from "../../database";
import { AddUserModel } from "../../useCases/user/add/model";
import { ResponseImplementation } from "../../util/response";

export class UserRepository {
    async save(data:AddUserModel){
        try {
           let user =  await prisma.user.create({
                data: {
                    email:data.email,
                    name:data.name,
                    password:data.password,
                    phoneNumber:data.phoneNumber
                }
            })
            return new ResponseImplementation(user, false);
        } catch (error) {
           return new ResponseImplementation("Houve um problema ao salvar o usuário", true, error.message) 
        }
    }
    async fetch(email:string){
        try {
            let user =  await prisma.user.findUnique({where:{email:email}})
            return new ResponseImplementation(user, false);
        } catch (error) {
            return new ResponseImplementation("Houve um problema ao buscar o usuário", true, error.message) 
        }
    }
    async delete(id:string){
        try {
            await prisma.user.delete({where:{id:id}})
            return new ResponseImplementation("Usuário removido.", false);
        } catch (error) {
            return new ResponseImplementation("Houve um problema ao remover o usuário", true, error.message) 
        }
    }
}