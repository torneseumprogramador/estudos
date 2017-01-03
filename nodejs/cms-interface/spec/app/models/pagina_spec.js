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

    it("conteudo precisa ser válido", function() {
      var pagina = new Pagina();
      expect(pagina.conteudo).toBe("");

    });
  });

  describe("com o método salvar", function() {
    it("deve incluir na API", function(done){
      var pagina = new Pagina();
      pagina.nome = "Nova pagina pela api";
      pagina.conteudo = "dda";
      pagina.salvar(function(retorno){
        expect(retorno.erro).toBe(false);
        done();
      });
    });
  });

  describe("com o método todos", function() {
    it("deve retornar todos os paginas pela API", function(done){
      Pagina.todos(function(retorno){
        expect(retorno.length >= 0).toBe(true);
        done();
      });
    });
  });
});