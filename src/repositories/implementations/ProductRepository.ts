import { prisma } from "../../database";
import { AddProductModel } from "../../useCases/product/add/model";
import { EditProductModel } from "../../useCases/product/edit/model";
import { ResponseImplementation } from "../../util/response";
import { IProductRepository } from "../interfaces/IProductRepository";

export class ProductRepository implements IProductRepository {
    async save(data:AddProductModel): Promise<ResponseImplementation> {
        try {
            await prisma.product.create({data:{
                ...data
            }})
            return new ResponseImplementation("Produto salvo!", false)
        } catch (error) {
            return new ResponseImplementation("Houve um erro ao salvar o produto!", true, error.message)
        }
    }
    async list(): Promise<ResponseImplementation> {
        try {
            let result = await prisma.product.findMany();
            return new ResponseImplementation(result, false);
        } catch (error) {
            return new ResponseImplementation("Houve um problema ao listar os produtos", true, error.message);
        }
    }
    async remove(id:string){
        try {
            await prisma.product.delete({where:{id:id}})
            return new ResponseImplementation("Produto removido com sucesso.", false);
        } catch (error) {
            return new ResponseImplementation("Houve um erro ao remover o produto..", true, error.message);
        }
    }
    async fetch(id:string){
        try {
            let result = await prisma.product.findUnique({where:{id:id}})
            return new ResponseImplementation(result, false);
        } catch (error) {
            return new ResponseImplementation("Houve um problema ao buscar o produto", true, error.message);
        }
    }
    async edit(data:EditProductModel){
        try {
            await prisma.product.update({
                where:{id:data.id},
                data:{
                    ...data
                }
            })
            return new ResponseImplementation("Produto editado com sucesso.", false);
        } catch (error) {
            return new ResponseImplementation("Houve um problema ao editar o produto.", true, error.message);
        }
    }

}