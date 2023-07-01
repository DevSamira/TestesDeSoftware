import { ProductRepository } from "../../../repositories/implementations/ProductRepository";
import { FetchProductController } from "./controller";
import { FetchProductUseCase } from "./useCase";



let repository = new ProductRepository()
let fetchProductUseCase = new FetchProductUseCase(repository);
let fetchProductController =  new FetchProductController(fetchProductUseCase);

export {fetchProductUseCase, fetchProductController};