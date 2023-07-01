import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";
import { AddProductModel } from "./model";


export class AddProductUseCase {

    constructor(private repository:IProductRepository){}

    async execute(data:any){
        return await this.repository.save(data);
    }
}