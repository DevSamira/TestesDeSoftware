import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { DeleteProductModel } from "./model";


export class DeleteProductUseCase {

    constructor(private repository:IProductRepository){}

    async execute(data:DeleteProductModel){
        return await this.repository.remove(data.id);
    }
}