describe("Tentando fazer login passando as credenciais corretas.", () => {
  it('Não deve ser mostrado um Alert com mensagem de credenciais inválidas', () => {
    cy.visit('http://localhost:8080/')
    cy.get("#inputEmail").type("teste@gmail.com")
    cy.get("#inputPassword").type("Senha123@")
    cy.get("#btnEnviar").click()
    //Se aparecer um alerta de email ou senha inválido esse teste vai falhar
    cy.on("window:alert", (t)=>{expect(t).not.contains('E-mail ou senha inválido');
    })
  })
})
  describe("Tentando fazer login passando uma senha inválida.", () => {
    it('Deve ser mostrado um Alert com mensagem de credenciais inválidas', () => {
      cy.visit('http://localhost:8080/')
      cy.get("#inputEmail").type("teste@gmail.com")
      cy.get("#inputPassword").type("senhaInvalida")
      cy.get("#btnEnviar").click()
      cy.on("window:alert", (t)=>{expect(t).to.contains('E-mail ou senha inválido');
      })
    })
  })
  describe("Tentando fazer login passando um E-mail inválido.", () => {
    it('Deve ser mostrado um Alert com mensagem de credenciais inválidas', () => {
      cy.visit('http://localhost:8080/')
      cy.get("#inputEmail").type("emailInvalido@gmail.com")
      cy.get("#inputPassword").type("Senha123@")
      cy.get("#btnEnviar").click()
      cy.on("window:alert", (t)=>{expect(t).to.contains('E-mail ou senha inválido');
      })
    })
  })
  describe("Tentando fazer login sem informar E-mail e Senha.", () => {
    it('Deve ser mostrado um Alert com mensagem de credenciais inválidas', () => {
      cy.visit('http://localhost:8080/')
      cy.get("#btnEnviar").click()
      cy.on("window:alert", (t)=>{expect(t).to.contains('E-mail ou senha inválido');
      })
    })
  })
