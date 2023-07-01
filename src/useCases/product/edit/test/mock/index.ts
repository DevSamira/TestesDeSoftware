import { AddProductUseCase } from "../../../add/useCase";
import { ListProductUseCase } from "../../../list/useCase";
import { EditProductUseCase } from "../../useCase";
import { EditProductRepositoryMock } from "./RepositoryMock";

let repository =  new EditProductRepositoryMock()
let editProductMockUseCase = new EditProductUseCase(repository);
let listProductMockUseCase = new ListProductUseCase(repository)
let addProductMockUseCase = new AddProductUseCase(repository) 

export {editProductMockUseCase, listProductMockUseCase, addProductMockUseCase}