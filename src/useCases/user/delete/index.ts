import { UserRepository } from "../../../repositories/implementations/UserRepository";
import { DeleteUserController } from "./controller";
import { DeleteUserUseCase } from "./useCase";

let repository = new UserRepository();
let deleteUserUseCase = new DeleteUserUseCase(repository);
let deleteUserController = new DeleteUserController(deleteUserUseCase)

export {deleteUserUseCase, deleteUserController}