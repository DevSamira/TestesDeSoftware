import { ProductRepository } from "../../../repositories/implementations/ProductRepository";
import { ListProductController } from "./controller";
import { ListProductUseCase } from "./useCase";




let repository = new ProductRepository()
let listProductUseCase = new ListProductUseCase(repository);
let listProductController =  new ListProductController(listProductUseCase);

export {listProductUseCase, listProductController};