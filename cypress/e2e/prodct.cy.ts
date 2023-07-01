let product = {
  name:"Objeto teste",
  description:"Esse é um objeto criado apenas para testes",
  value:"99,99",
  code:"99"
}
describe("Tentando cadastrar um produto.", () => {
    it('Não deve ser mostrado nenhum alerta de erro', () => {
      cy.visit('http://localhost:8080/')
      cy.get("#inputEmail").type("teste@gmail.com")
      cy.get("#inputPassword").type("Senha123@")
      cy.get("#btnEnviar").click()
      cy.on("window:alert", (t)=>{expect(t).not.contains('E-mail ou senha inválido')})
      cy.get("#btnAdicionar").click()
      cy.get("#name").type(product.name, {force:true})
      cy.get("#code").type(product.code, {force:true})
      cy.get("#description").type(product.description, {force:true})
      cy.get("#value").type(product.value, {force:true})
      cy.get("#btnSalvar").click({force:true})
      
   })
})
describe("Tentando remover um produto.", () => {
  it('Não deve ser mostrado nenhum alerta de erro', () => {
    cy.visit('http://localhost:8080/')
    cy.get("#inputEmail").type("teste@gmail.com")
    cy.get("#inputPassword").type("Senha123@")
    cy.get("#btnEnviar").click()
    cy.on("window:alert", (t)=>{expect(t).not.contains('E-mail ou senha inválido')})
    cy.get(`#delete${product.code}`).click()
 })
})

describe("Tentando cadastrar um produto duplicado.", () => {
  it('Deve ser mostrado um alerta indicando que não é possivel cadastra produtos duplicados.', () => {
    cy.visit('http://localhost:8080/')
    cy.get("#inputEmail").type("teste@gmail.com")
    cy.get("#inputPassword").type("Senha123@")
    cy.get("#btnEnviar").click()
    cy.on("window:alert", (t)=>{expect(t).not.contains('E-mail ou senha inválido')})
    cy.get("#btnAdicionar").click()
    cy.get("#name").type(product.name, {force:true})
    cy.get("#code").type(product.code, {force:true})
    cy.get("#description").type(product.description, {force:true})
    cy.get("#value").type(product.value, {force:true})
    cy.get("#btnSalvar").click({force:true})
    cy.get("#btnAdicionar").click()
    cy.get("#name").type(product.name, {force:true})
    cy.get("#code").type(product.code, {force:true})
    cy.get("#description").type(product.description, {force:true})
    cy.get("#value").type(product.value, {force:true})
    cy.get("#btnSalvar").click({force:true})
    
    cy.on("window:alert", (t)=>{expect(t).contains('Não foi possível cadastrar o produto. Verifique se o código de produto passando não está sendo usado em outro produto.')})
    cy.wait(200)
 })
})
describe("Tentando editar um produto.", () => {
  it('Nõa deve ser mostrado nenhum alerta de erro.', () => {
    cy.visit('http://localhost:8080/')
    cy.get("#inputEmail").type("teste@gmail.com")
    cy.get("#inputPassword").type("Senha123@")
    cy.get("#btnEnviar").click()
    cy.on("window:alert", (t)=>{expect(t).not.contains('E-mail ou senha inválido')})
    cy.get(`#delete${product.code}`).click()
    cy.get("#btnAdicionar").click()
    cy.get("#name").type(product.name, {force:true})
    cy.get("#code").type(product.code, {force:true})
    cy.get("#description").type(product.description, {force:true})
    cy.get("#value").type(product.value, {force:true})
    cy.get("#btnSalvar").click({force:true})
    cy.get("#btnAdicionar").click()
    cy.get("#name").type(product.name, {force:true})
    cy.get("#code").type(product.code, {force:true})
    cy.get("#description").type(product.description, {force:true})
    cy.get("#value").type(product.value, {force:true})
    cy.get("#btnSalvar").click({force:true})
    cy.get(`#edit${product.code}`).click()
    cy.get("#editName").clear().type("Tentando editar", {force:true})
    cy.get("#editDescription").clear().type("Uma descrição qualquer...", {force:true})
    cy.get("#editValue").clear().type("29,99", {force:true})
    cy.get("#editCode").clear().type("12", {force:true})
    cy.wait(200)
    cy.get(`#btnEdit`).click({force:true})
    cy.wait(200)
    cy.get(`#delete${12}`).click()
 })
})
describe("Tentando fazer log out.", () => {
  it('Não deve ser mostrado nenhum alerta de erro.', () => {
    cy.visit('http://localhost:8080/')
    cy.get("#inputEmail").type("teste@gmail.com")
    cy.get("#inputPassword").type("Senha123@")
    cy.get("#btnEnviar").click()
    cy.on("window:alert", (t)=>{expect(t).not.contains('E-mail ou senha inválido')})
    cy.get(`#btnSair`).click()
    cy.url().should('equal', 'http://localhost:8080/')
 })
})