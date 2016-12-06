var Pagina = require("../../../app/models/pagina");

describe("O modelo de pagina", function() {
  describe("com o atributo", function() {
    it("id precisa ser válido", function() {
      var pagina = new Pagina();
      expect(pagina.id).toBe(0);

    });

    it("nome precisa ser válido", function() {
      var pagina = new Pagina();
      expect(pagina.nome).toBe("");

    });

    it("login precisa ser válido", function() {
      var pagina = new Pagina();
      expect(pagina.conteudo).toBe("");

    });
  });

  describe("com o método salvar", function() {
    it("deve incluir no banco de dados", function(done){
      var pagina = new Pagina();
      pagina.nome = "Pagina de teste";
      pagina.conteudo = "algum conteudo";
      pagina.salvar(function(retorno){
        expect(retorno.erro).toBe(false);
        done();
      });
    });
  });

  describe("com o método excluir todos", function() {
    it("deve excluir todos os paginas", function(done){
      Pagina.excluirTodos(function(retorno){
        expect(retorno.erro).toBe(false);
        done();
      });
    });
  });

  describe("com o método buscarPorID", function() {
    it("deve retornar o pagina pelo seu ID", function(done){
      Pagina.truncateTable(function(retorno1){
        var pagina = new Pagina();
        pagina.nome = "Criando Pagina nova";
        pagina.conteudo = "teste conteudo";
        pagina.salvar(function(retorno2){
          Pagina.buscarPorID(1, function(retorno3){
            expect(retorno3.erro).toBe(false);
            expect(retorno3.pagina.id).toBe(1);
            done();
          });
        });
      });
    });
  });

  describe("com o método excluirPorID", function() {
    it("deve excluir o pagina pelo seu ID", function(done){
      Pagina.truncateTable(function(retorno1){
        var pagina = new Pagina();
        pagina.nome = "Criando Pagina nova";
        pagina.conteudo = "teste conteudo";
        pagina.salvar(function(retorno2){
          Pagina.excluirPorID(1, function(retorno3){
            expect(retorno3.erro).toBe(false);
            done();
          });
        });
      });
    });
  });

  describe("com o método todos", function() {
    it("deve retornar todos os paginas", function(done){
      Pagina.excluirTodos(function(retorno1){
        var pagina = new Pagina();
        pagina.nome = "Criando Pagina nova";
        pagina.conteudo = "teste conteudo";
        pagina.salvar(function(retorno2){
          Pagina.todos(function(retorno3){
            expect(retorno3.erro).toBe(false);
            expect(retorno3.paginas.length).toBe(1);
            done();
          });
        });
      });
    });
  });

  describe("com o método savar para atualizar", function() {
    it("deve atualizar o pagina criado", function(done){
      Pagina.excluirTodos(function(retorno1){
        var pagina = new Pagina();
        pagina.nome = "Criando Pagina nova";
        pagina.conteudo = "teste conteudo";
        pagina.salvar(function(retorno2){
          Pagina.todos(function(retorno3){
            var pagina = retorno3.paginas[0];
            var uUpdate = new Pagina(pagina);
            uUpdate.nome = "Nome atualizado";
            uUpdate.salvar(function(retorno4){
              expect(retorno4.erro).toBe(false);
              done();
            });
          });
        });
      });
    });
  });

  describe("com o método buscarPorNome", function() {
    it("deve retornar todos os paginas", function(done){
      Pagina.excluirTodos(function(retorno1){
        nome = "pagina de busca original";
        var pagina = new Pagina({nome:nome, conteudo:"uma pagina de busca"});
        pagina.salvar(function(retorno2){
          var pagina2 = new Pagina({nome:"pagina de busca 2", login:"bla bla"});
          pagina2.salvar(function(retorno3){
            Pagina.buscarPorNome("original", function(retorno4){
              expect(retorno4.erro).toBe(false);
              expect(retorno4.paginas.length).toBe(1);
              expect(retorno4.paginas[0].nome).toBe(nome);
              done();
            });
          });
        });
      });
    });
  });

});