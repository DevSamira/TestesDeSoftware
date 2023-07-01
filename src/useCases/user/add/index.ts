import { UserRepository } from "../../../repositories/implementations/UserRepository";
import { AddUserController } from "./controller";
import { AddUserUseCase } from "./useCase";

let repository = new UserRepository();
let addUseruseCase = new AddUserUseCase(repository);
let addUserController =  new AddUserController(addUseruseCase);

export {addUserController, addUseruseCase};