import {prisma} from '../../src/database'
let user = {
    name:'Teste da Silva',
    email:'teste2@gmail.com',
    password:'Senha123@',
    phoneNumber:'88 99324-8923'
}

describe("Tentando cadastrar um usuário.", () => {
    it('Não deve ser mostrado nenhum alerta de erro', () => {
        cy.visit('http://localhost:8080/')
        cy.get('#linkCadastre').click()
        cy.get('#name').type(user.name, {force:true})
        cy.wait(200)
        cy.get('#email').type(user.email, {force:true})
        cy.wait(200)
        cy.get('#phoneNumber').type(user.phoneNumber, {force:true})
        cy.wait(200)
        cy.get('#password').type(user.password, {force:true})
        cy.wait(200)
        cy.get('#btnSalvar').click({force:true})
        cy.wait(200)
        cy.on("window:alert", (t)=>{expect(t).contains('Houve um problema ao salvar o usuário');
        })
        cy.wait(400)
    })
})
describe("Tentando apagar um conta.", () => {
    it('Não deve ser mostrado nenhum alerta de erro.', () => {
        cy.visit('http://localhost:8080/')
        cy.get("#inputEmail").type(user.email, {force:true})
        cy.wait(200)
        cy.get("#inputPassword").type(user.password, {force:true})
        cy.wait(200)
        cy.get("#btnEnviar").click()
        cy.wait(200)
        cy.on("window:alert", (t)=>{expect(t).not.contains('E-mail ou senha inválido');
        })
        cy.wait(200)
        cy.get('#btnApagarConta').click({force:true})
        cy.wait(200)
    })
})
