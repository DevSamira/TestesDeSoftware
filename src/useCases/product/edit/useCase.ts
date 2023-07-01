import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { EditProductModel } from "./model";


export class EditProductUseCase {

    constructor(private repository:IProductRepository){}

    async execute(data:any){
        return await this.repository.edit(data);
    }
}