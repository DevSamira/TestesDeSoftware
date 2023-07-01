import {it, describe, expect} from 'vitest'
import { AddProductModel } from '../model'
import { addProducMockUC } from './mock'

describe("Tentando salvar um produto passando todos os dados necessários.", () => {
    
    let data:AddProductModel = {
        name: 'Samsung a10',
        description: 'Smartphone da samsung',
        value: '1.239,99',
        code: '001',
        author: '02621189-0715-45fd-b63b-0e73a6b8ee4f'
    }
    it("Deve retornar uma response implementation sem erro.", async ()=>{
        let result = await addProducMockUC.execute(data);
        expect(result).toMatchObject({has_error:false})
    })
})
describe("Tentando salvar um produto passando um código de produto duplicado.", () => {

    let data:AddProductModel = {
        name: 'Samsung a20',
        description: 'Novo smartphone da samsung',
        value: '1.239,99',
        code: '001',
        author: '02ter621189-0715-45fd-b63b-0e73a6b8ee4f'
    }
    it("Deve retornar uma response implementation sem erro.", async ()=>{
        let result = await addProducMockUC.execute(data);
        expect(result).toMatchObject({has_error:true})
    })
})
describe("Tentando salvar um produto sem passar  o nome.", () => {
    let data = {
        description: 'Smartphone da samsung',
        value: '1.239,99',
        code: '001',
        author: '02621189-0715-45fd-b63b-0e73a6b8ee4f'
    }
    it("Deve retornar uma response implementation com erro.", async ()=>{
        let result = await addProducMockUC.execute(data);
        expect(result).toMatchObject({has_error:true})
    })
})
describe("Tentando salvar um produto sem passar  a descrição.", () => {
    let data = {
        name: 'Samsung a10',
        value: '1.239,99',
        code: '001',
        author: '02621189-0715-45fd-b63b-0e73a6b8ee4f'
    }
    it("Deve retornar uma response implementation com erro.", async ()=>{
        let result = await addProducMockUC.execute(data);
        expect(result).toMatchObject({has_error:true})
    })
})
describe("Tentando salvar um produto sem passar  um valor.", () => {
    let data = {
        name: 'Samsung a10',
        description: 'Smartphone da samsung',
        code: '001',
        author: '02621189-0715-45fd-b63b-0e73a6b8ee4f'
    }
    it("Deve retornar uma response implementation com erro.", async ()=>{
        let result = await addProducMockUC.execute(data);
        expect(result).toMatchObject({has_error:true})
    })
})
describe("Tentando salvar um produto sem passar  um código.", () => {
    let data = {
        name: 'Samsung a10',
        description: 'Smartphone da samsung',
        value: '1.239,99',
        author: '02621189-0715-45fd-b63b-0e73a6b8ee4f'
    }
    it("Deve retornar uma response implementation com erro.", async ()=>{
        let result = await addProducMockUC.execute(data);
        expect(result).toMatchObject({has_error:true})
    })
})
describe("Tentando salvar um produto sem passar  um autor.", () => {
    let data = {
        name: 'Samsung a10',
        description: 'Smartphone da samsung',
        value: '1.239,99',
        code: '001',
    }
    it("Deve retornar uma response implementation com erro.", async ()=>{
        let result = await addProducMockUC.execute(data);
        expect(result).toMatchObject({has_error:true})
    })
})