import {it, describe, expect} from 'vitest'
import { AddUserModel } from '../model'
import { addUserUseCaseMock } from './mock'

describe("Tentando salvar um usuário", ()=>{
    let data:AddUserModel ={
        name: 'Jhon Doe',
        email: 'JhonDoe@gmail.com',
        password: '12345678',
        phoneNumber: '(55) 8 99239-9888'
    }
    it("Deve retornar uma ResponseImplementation sem erro", async ()=>{
        let result = await addUserUseCaseMock.execute(data)
        expect(result).toMatchObject({has_error:false})
    })
})
describe("Tentando salvar um usuário com email duplicado", ()=>{
    let data:AddUserModel ={
        name: 'Jhon Doe junior',
        email: 'JhonDoe@gmail.com',
        password: '12345678',
        phoneNumber: '(55) 8 99989-9088'
    }
    it("Deve retornar uma ResponseImplementation com erro", async ()=>{
        let result = await addUserUseCaseMock.execute(data)
        expect(result).toMatchObject({has_error:true})
    })
})
describe("Tentando salvar um usuário sem passar um nome", ()=>{
    let data ={
        email: 'JhonDoe@gmail.com',
        password: '12345678',
        phoneNumber: '(55) 8 99989-9088'
    }
    it("Deve retornar uma ResponseImplementation com erro", async ()=>{
        let result = await addUserUseCaseMock.execute(data)
        expect(result).toMatchObject({has_error:true})
    })
})
describe("Tentando salvar um usuário sem passar um email", ()=>{
    let data ={
        name: 'Jhon Doe junior',
        password: '12345678',
        phoneNumber: '(55) 8 99989-9088'
    }
    it("Deve retornar uma ResponseImplementation com erro", async ()=>{
        let result = await addUserUseCaseMock.execute(data)
        expect(result).toMatchObject({has_error:true})
    })
})
describe("Tentando salvar um usuário sem passar uma senha", ()=>{
    let data ={
        name: 'Jhon Doe junior',
        email: 'JhonDoe@gmail.com',
        phoneNumber: '(55) 8 99989-9088'
    }
    it("Deve retornar uma ResponseImplementation com erro", async ()=>{
        let result = await addUserUseCaseMock.execute(data)
        expect(result).toMatchObject({has_error:true})
    })
})
describe("Tentando salvar um usuário sem passar um número de telefone", ()=>{
    let data ={
        name: 'Jhon Doe',
        email: 'JhonDoe@gmail.com',
        password: '12345678',
    }
    it("Deve retornar uma ResponseImplementation com erro", async ()=>{
        let result = await addUserUseCaseMock.execute(data)
        expect(result).toMatchObject({has_error:true})
    })
})