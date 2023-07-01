import { AddProductModel } from "../../useCases/product/add/model";
import { EditProductModel } from "../../useCases/product/edit/model";
import { ResponseImplementation } from "../../util/response";

export interface IProductRepository {
    save(data:AddProductModel):Promise<ResponseImplementation>
    list():Promise<ResponseImplementation>
    remove(id:string):Promise<ResponseImplementation>
    fetch(id:string):Promise<ResponseImplementation>
    edit(data:EditProductModel):Promise<ResponseImplementation>
}