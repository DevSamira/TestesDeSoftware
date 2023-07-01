import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { FetchProductModal } from "./model";


export class FetchProductUseCase {

    constructor(private repository:IProductRepository){}

    async execute(data:FetchProductModal){
        return await this.repository.fetch(data.id);
    }
}