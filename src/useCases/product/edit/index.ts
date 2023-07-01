import { ProductRepository } from "../../../repositories/implementations/ProductRepository";
import { EditProductController } from "./controller";
import { EditProductUseCase } from "./useCase";



let repository = new ProductRepository()
let editProductUseCase = new EditProductUseCase(repository);
let editProductController =  new EditProductController(editProductUseCase);

export {editProductUseCase, editProductController};