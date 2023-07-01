import { IUserRepository } from "../../../../../repositories/interfaces/IUserRepository";
import { AddUserUseCase } from "../../useCase";
import { UserRepositoryMock } from "./RepositoryMock";

let repository = new UserRepositoryMock();
let addUserUseCaseMock = new AddUserUseCase(repository)

export {addUserUseCaseMock}