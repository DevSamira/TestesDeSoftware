import { beforeAll, describe, expect, it } from "vitest";
import { AddUserModel } from "../../../user/add/model";
import { addProductMockUseCase, editProductMockUseCase, listProductMockUseCase } from "./mock";
import { AddProductModel } from "../../add/model";
import { EditProductModel } from "../model";

let products
let productToSave = {
    name: "Cafeteira Brastemp",
    description: "A melhor opção para você que gosta de um bom café!",
    value: "169,99",
    code: "002",
    author: "lKsJsfSsfEb-213243-sadf"
}
beforeAll(async ()=>{
    await addProductMockUseCase.execute(productToSave)
    products = await listProductMockUseCase.execute()
})

describe("Tentando atualizar um produto passando todos os dados necessários", async ()=>{
    it("Deve retornar uma ResponseImplementation sem erro.", async ()=>{
        let editedProduct:EditProductModel = {
            name: "Cafeteira Polishop",
            description: "A melhor cafeiteira do mercado!",
            value: "159,99",
            code: "003",
            author: products.data[0].author,
            id: products.data[0].id
        }
        let result = await editProductMockUseCase.execute(editedProduct)
        expect(result).toMatchObject({has_error:false})
    })
})
describe("Tentando atualizar um produto passando um id inválido", async ()=>{
    it("Deve retornar uma ResponseImplementation com erro.", async ()=>{
        let editedProduct:EditProductModel = {
            name: "Cafeteira Polishop",
            description: "A melhor cafeiteira do mercado!",
            value: "159,99",
            code: "003",
            author: products.data[0].author,
            id: "id inválido"
        }
        let result = await editProductMockUseCase.execute(editedProduct)
        expect(result).toMatchObject({has_error:true})
    })
})
describe("Tentando atualizar um produto sem passar um nome", async ()=>{
    it("Deve retornar uma ResponseImplementation sem erro.", async ()=>{
        let editedProduct = {
            description: "A melhor cafeiteira do mercado!",
            value: "159,99",
            code: "003",
            author: products.data[0].author,
            id: products.data[0].id
        }
        let result = await editProductMockUseCase.execute(editedProduct)
        expect(result).toMatchObject({has_error:false})
    })
})
describe("Tentando atualizar um produto sem passar uma descrição", async ()=>{
    it("Deve retornar uma ResponseImplementation sem erro.", async ()=>{
        let editedProduct = {
            name: "Cafeteira Polishop",
            value: "159,99",
            code: "003",
            author: products.data[0].author,
            id: products.data[0].id
        }
        let result = await editProductMockUseCase.execute(editedProduct)
        expect(result).toMatchObject({has_error:false})
    })
})
describe("Tentando atualizar um produto sem passar um valor", async ()=>{
    it("Deve retornar uma ResponseImplementation sem erro.", async ()=>{
        let editedProduct = {
            name: "Cafeteira Polishop",
            description: "A melhor cafeiteira do mercado!",
            code: "003",
            author: products.data[0].author,
            id: products.data[0].id
        }
        let result = await editProductMockUseCase.execute(editedProduct)
        expect(result).toMatchObject({has_error:false})
    })
})
describe("Tentando atualizar um produto sem passar um código", async ()=>{
    it("Deve retornar uma ResponseImplementation sem erro.", async ()=>{
        let editedProduct = {
            name: "Cafeteira Polishop",
            description: "A melhor cafeiteira do mercado!",
            value: "159,99",
            author: products.data[0].author,
            id: products.data[0].id
        }
        let result = await editProductMockUseCase.execute(editedProduct)
        expect(result).toMatchObject({has_error:false})
    })
})
describe("Tentando atualizar um produto sem passar um autor", async ()=>{
    it("Deve retornar uma ResponseImplementation sem erro.", async ()=>{
        let editedProduct = {
            name: "Cafeteira Polishop",
            description: "A melhor cafeiteira do mercado!",
            value: "159,99",
            code: "003",
            id: products.data[0].id
        }
        let result = await editProductMockUseCase.execute(editedProduct)
        expect(result).toMatchObject({has_error:false})
    })
})
describe("Tentando atualizar um produto sem passar um id", async ()=>{
    it("Deve retornar uma ResponseImplementation com erro.", async ()=>{
        let editedProduct = {
            name: "Cafeteira Polishop",
            description: "A melhor cafeiteira do mercado!",
            value: "159,99",
            code: "003",
            author: products.data[0].author,
        }
        let result = await editProductMockUseCase.execute(editedProduct)
        expect(result).toMatchObject({has_error:true})
    })
})