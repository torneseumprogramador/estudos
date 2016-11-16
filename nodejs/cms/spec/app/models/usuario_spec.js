var Usuario = require("../../../app/models/usuario");

describe("O modelo de usuário", function() {
  describe("com o atributo", function() {
    it("id precisa ser válido", function() {
      var usuario = new Usuario();
      expect(usuario.id).toBe(0);

    });

    it("nome precisa ser válido", function() {
      var usuario = new Usuario();
      expect(usuario.nome).toBe("");

    });

    it("login precisa ser válido", function() {
      var usuario = new Usuario();
      expect(usuario.login).toBe("");

    });

    it("senha precisa ser válido", function() {
      var usuario = new Usuario();
      expect(usuario.senha).toBe("");

    });

    it("email precisa ser válido", function() {
      var usuario = new Usuario();
      expect(usuario.email).toBe("");
    });
  });

  describe("com o método salvar", function() {
    it("deve incluir no banco de dados", function(done){
      var usuario = new Usuario();
      usuario.nome = "Danilo com teste";
      usuario.login = "didox";
      usuario.senha = "123";
      usuario.email = "danilo@beminfinito.com.br";
      usuario.salvar(function(retorno){
        expect(retorno.erro).toBe(false);
        done();
      });
    });
  });

  describe("com o método excluir todos", function() {
    it("deve excluir todos os usuarios", function(done){
      Usuario.excluirTodos(function(retorno){
        expect(retorno.erro).toBe(false);
        done();
      });
    });
  });

  describe("com o método buscarPorID", function() {
    it("deve retornar o usuario pelo seu ID", function(done){
      Usuario.truncateTable(function(retorno1){
        var usuario = new Usuario();
        usuario.nome = "Danilo com teste";
        usuario.login = "didox";
        usuario.senha = "123";
        usuario.email = "danilo@beminfinito.com.br";
        usuario.salvar(function(retorno2){
          Usuario.buscarPorID(1, function(retorno3){
            expect(retorno3.erro).toBe(false);
            expect(retorno3.usuario.id).toBe(1);
            done();
          });
        });
      });
    });
  });

  describe("com o método excluirPorID", function() {
    it("deve excluir o usuario pelo seu ID", function(done){
      Usuario.truncateTable(function(retorno1){
        var usuario = new Usuario();
        usuario.nome = "Danilo com teste";
        usuario.login = "didox";
        usuario.senha = "123";
        usuario.email = "danilo@beminfinito.com.br";
        usuario.salvar(function(retorno2){
          Usuario.excluirPorID(1, function(retorno3){
            expect(retorno3.erro).toBe(false);
            done();
          });
        });
      });
    });
  });

  describe("com o método todos", function() {
    it("deve retornar todos os usuarios", function(done){
      Usuario.excluirTodos(function(retorno1){
        var usuario = new Usuario();
        usuario.nome = "Danilo com teste";
        usuario.login = "didox";
        usuario.senha = "123";
        usuario.email = "danilo@beminfinito.com.br";
        usuario.salvar(function(retorno2){
          Usuario.todos(function(retorno3){
            expect(retorno3.erro).toBe(false);
            expect(retorno3.usuarios.length).toBe(1);
            done();
          });
        });
      });
    });
  });

  describe("com o método savar para atualizar", function() {
    it("deve atualizar o usuário criado", function(done){
      Usuario.excluirTodos(function(retorno1){
        var usuario = new Usuario();
        usuario.nome = "Danilo com teste";
        usuario.login = "didox";
        usuario.senha = "123";
        usuario.email = "danilo@beminfinito.com.br";
        usuario.salvar(function(retorno2){
          Usuario.todos(function(retorno3){
            var usuario = retorno3.usuarios[0];
            var uUpdate = new Usuario(usuario);
            uUpdate.nome = "Danilo atualizado pelo teste";
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
    it("deve retornar todos os usuarios", function(done){
      Usuario.excluirTodos(function(retorno1){
        nome = "Danilo com teste";
        var usuario = new Usuario({nome:nome, login:"didox", senha:"123", email:"danilo@beminfinito.com.br"});
        usuario.salvar(function(retorno2){
          var usuario2 = new Usuario({nome:"Denilson", login:"denilson", senha:"d123", email:"denilson@beminfinito.com.br"});
          usuario2.salvar(function(retorno3){
            Usuario.buscarPorNome("danilo", function(retorno4){
              expect(retorno4.erro).toBe(false);
              expect(retorno4.usuarios.length).toBe(1);
              expect(retorno4.usuarios[0].nome).toBe(nome);
              done();
            });
          });
        });
      });
    });
  });

});