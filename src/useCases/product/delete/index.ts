import { ProductRepository } from "../../../repositories/implementations/ProductRepository";
import { DeleteProductController } from "./controller";
import {  DeleteProductUseCase } from "./useCase";



let repository = new ProductRepository()
let deleteProductUseCase = new DeleteProductUseCase(repository);
let deleteProductController =  new DeleteProductController(deleteProductUseCase);

export {deleteProductUseCase, deleteProductController};