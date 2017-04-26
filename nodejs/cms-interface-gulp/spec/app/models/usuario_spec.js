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

  describe("com o método buscar", function() {
    it("deve buscar na API por ID", function(done){
      var usuario = new Usuario();
      usuario.id = 5;
      usuario.buscar(function(usuario){
        expect(usuario.erro).toBe(undefined);
        expect(usuario.nome).toBe("Danilo criado pela interface CMS");
        done();
      });
    });
  });

  describe("com o método excluir", function() {
    it("deve excluir na API por ID", function(done){
      var usuario = new Usuario();
      usuario.id = 10;
      usuario.excluir(function(retorno){
        expect(retorno.erro).toBe(false);
        done();
      });
    });
  });

  describe("com o método salvar", function() {
    it("deve incluir na API", function(done){
      var usuario = new Usuario();
      usuario.nome = "Danilo criado pela interface CMS";
      usuario.login = "dda";
      usuario.senha = "dds2";
      usuario.email = "dda@beminfinito.com.br";
      usuario.salvar(function(retorno){
        expect(retorno.erro).toBe(false);
        done();
      });
    });
  });

  describe("com o método todos", function() {
    it("deve retornar todos os usuarios pela API", function(done){
      Usuario.todos(function(retorno){
        expect(retorno.length >= 0).toBe(true);
        done();
      });
    });
  });
});