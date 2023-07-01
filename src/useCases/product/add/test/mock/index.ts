import { IProductRepository } from "../../../../../repositories/interfaces/IProductRepository";
import { AddProductController } from "../../controller";
import { AddProductUseCase } from "../../useCase";
import { AddProductMock } from "./RepositoryMock";

let repository = new AddProductMock();
let addProducMockUC = new AddProductUseCase(repository);
export {addProducMockUC}