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

  describe("incluir", function() {

    it("precisa incluir o usuário", function(done) {

      Usuario.quantidade(function(qtdAtual){

        var usuario = new Usuario();
        usuario.nome = "danilo123";
        usuario.login = "danilo123";
        usuario.senha = "danilo123";
        usuario.email = "danilo123";

        usuario.salvar(function(){
        

          Usuario.quantidade(function(qtdNova){

            expect(qtdAtual < qtdNova).toEqual(true);
            done();

          });


        });

      });

    });

  });

});

// var request = require("request");
// describe("Testes de controller", function() {

//   describe("GET /", function() {
//     it("returns status code 200", function(done) {
//       request.get("http://localhost:3000/", function(error, response, body) {
//         if(response === undefined){
//           console.log("Não consegui localizar o servidor");
//           expect(503).toBe(200);
//         }
//         else{
//           expect(response.statusCode).toBe(200);
//         }
//         done();
//       });
//     });
//   });

//   describe("GET /usuario", function() {
//     it("returns status code 200", function(done) {
//       request.get("http://localhost:3000/usuario", function(error, response, body) {
//         if(response === undefined){
//           console.log("Não consegui localizar o servidor");
//           expect(503).toBe(200);
//         }
//         else{
//           expect(response.statusCode).toBe(200);
//         }
//         done();
//       });
//     });
//   });

// });


