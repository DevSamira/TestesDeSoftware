import { afterAll, describe, expect, it } from "vitest";
import request from 'supertest'
import { app } from "./app";
import { prisma } from "./database";


let userSaved

describe("Tentando salvar um usuário com um e-mail inválido", () => { 
    it("Deve retornar uma ResponseImplementation com erro e status 400", async ()=>{
        const response = await request(app).post("/user").send({
            name:"Jhon Doe",         
            email:"emailInválido"  ,
            password:"SenhaForte123@",        
            phoneNumber:"(55) 8 99234-8976"  
        })
        expect(response.body).toMatchObject({data:"Email inválido",has_error:true})
        expect(response.statusCode).toBe(400)
    })
})

describe("Tentando salvar um usuário com um senha fraca", () => { 
    it("Deve retornar uma ResponseImplementation com erro e status 400", async ()=>{
        const response = await request(app).post("/user").send({
            name:"Jhon Doe",         
            email:"jhonDoe@gmail.com"  ,
            password:"senhaFraca",        
            phoneNumber:"(55) 8 99234-8976"  
        })
        expect(response.body).toMatchObject({data:"Senha fraca",has_error:true})
        expect(response.statusCode).toBe(400)
    })
})
describe("Tentando salvar um usuário", () => { 
    it("Deve retornar uma ResponseImplementation sem erro e status 200", async ()=>{
        const response = await request(app).post("/user").send({
            name:"Jhon Doe",         
            email:"jhonDoe@gmail.com"  ,
            password:"Senha123@",        
            phoneNumber:"(55) 8 99234-8976"  
        })
        expect(response.body).toMatchObject({has_error:false})
        expect(response.statusCode).toBe(200)
        userSaved = response.body.data
       
    })
})

describe("Tentando salvar um produto.", () => { 
    it("Deve retornar uma ResponseImplementation sem erro e status 200", async ()=>{
        const response = await request(app).post("/product").send({
            name:"Samsung a30s",
            description:"Smartphone ideal para o seu uso diário.",
            value:"1.899,99",
            code:"010",
            author:userSaved.id
        })
        expect(response.body).toMatchObject({has_error:false})
        expect(response.statusCode).toBe(200)
    })
})



afterAll(async ()=> {
    
    await prisma.user.delete({where:{email:"jhonDoe@gmail.com"}})

})

