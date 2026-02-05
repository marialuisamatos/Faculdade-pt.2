// Grupo de testes com o título "Validação de login"
describe("Validação de login", () => {
  //Executa antes de todos os it
    beforeEach(() => {
      cy.visit("http://127.0.0.1:5500/projetoteste/login.html");
    });
  
    it("1. Testar se o campo senha aceita ser enviado vazio", () => {
      cy.get("#email").type("Test123@teste.com"); //Seleciona o campo e escreve nele
      cy.wait(2000);
      cy.get("#password").clear(); // Limpa o campo
      cy.wait(2000); //Espera 2s antes de fazer a próxima ação
      cy.get(".btn").click(); //Seleciona o elemento pela classe e clica nele
      cy.get("#passwordAlert").should("contain", "senha"); //Verifica o elemento e espera a mensagem dele
    });
  
    it("2. Testar se o campo email aceita ser enviado sem o domínio", () => {
      cy.get("#email").type("Test@");
      cy.wait(2000);
      cy.get("#password").type("@9A9b");
      cy.wait(2000);
      cy.get(".btn").click();
    });
  
    it("3. Testar se o campo email é válido com qualquer coisa que não seja o domínio", () => {
      cy.get("#email").type("Test123@a.a");
      cy.wait(2000);
      cy.get("#password").type("8@9A9b");
      cy.wait(2000);
      cy.get(".btn").click();
    });
  
    it("4. Testar se o campo email aceita ser enviado com caracteres especiais", () => {
      cy.get("#email").type("Tes'&te.com");
      cy.wait(2000);
      cy.get("#password").type("8@A9b2");
      cy.wait(2000);
      cy.get(".btn").click();
      cy.get("#emailAlert").should("contain", "e-mail válido");
    });
  
    it("5. Testar se o campo senha aceita ser enviado acima do limite de caracteres", () => {
      cy.get("#email").type("Teste123@teste.com");
      cy.wait(2000);
      cy.get("#password").type("8@Ahj8b");
      cy.wait(2000);
      cy.get(".btn").click();
      cy.get("#passwordAlert").should("contain", "entre 3 e 6 caracteres");
    });
  
    it("6. Testar o email e a senha correta", () => {
      cy.get("#email").type("teste@email.com");
      cy.wait(2000);
      cy.get("#password").type("1@Bc");
      cy.wait(2000);
      cy.get(".btn").click();
  
      cy.url().should("include", "sucesso.html"); // Verifica o redirecionamento
    });
  });
  