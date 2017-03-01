var Base = require("../../../app/models/base");

describe("O modelo de usuário", function() {
  describe("com o método salvar", function() {
    it("deve incluir na API", function(done){
      var base = new Base();
      expect(base.salvar !== undefined).toBe(true);
      done();
    });
  });

  describe("com o método buscar", function() {
    it("deve buscar pelo ID", function(done){
      var base = new Base();
      expect(base.buscar !== undefined).toBe(true);
      done();
    });
  });

  describe("com o método todos", function() {
    it("deve retornar todos os Bases pela API", function(done){
      var base = new Base();
      expect(base.todos !== undefined).toBe(true);
      done();
    });
  });

  describe("com o método excluir", function() {
    it("deve apagar o dado pela API", function(done){
      var base = new Base();
      base.id = 1;
      expect(base.excluir !== undefined).toBe(true);
      done();
    });

    it("deve validar o id para exclusão", function(done){
      var base = new Base();
      base.excluir(function(retorno){
        if(retorno.erro){
          expect(retorno.mensagem).toBe("Id para exclusão obrigatório");
          done();
        }
      });
    });
  });
});