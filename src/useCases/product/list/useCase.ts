import { IProductRepository } from "../../../repositories/interfaces/IProductRepository";



export class ListProductUseCase {

    constructor(private repository:IProductRepository){}

    async execute(){
        return await this.repository.list();
    }
}