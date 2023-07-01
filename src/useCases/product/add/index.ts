import { ProductRepository } from "../../../repositories/implementations/ProductRepository";
import { AddProductController } from "./controller";
import { AddProductUseCase } from "./useCase";



let repository = new ProductRepository()
let addProductUseCase = new AddProductUseCase(repository);
let addProductController =  new AddProductController(addProductUseCase);

export {addProductController, addProductUseCase};