var request = require("request");

describe("O controller de usuarios", function() {
	describe("GET /usuarios.json - deve retornar no serviço todos os usuarios cadastrados", function() {
		it("deve retornar o status code de 200", function(done) {
      request.get("http://localhost:3000/usuarios.json", function(error, response, body) {
        if(response === undefined){
          console.log("Não consegui localizar o servidor");
          expect(503).toBe(200);
        }
        else{
          expect(response.statusCode).toBe(200);
        }
        done();
      });
    });
	});
});