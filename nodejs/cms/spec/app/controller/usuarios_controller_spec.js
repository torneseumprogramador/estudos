var request = require("request");
var host = "http://localhost:3000";
var Usuario = require("../../../app/models/usuario");

describe("O controller de usuarios", function() {
	describe("GET /usuarios.json - deve retornar no serviço todos os usuarios cadastrados", function() {
		it("deve retornar o status code de 200", function(done) {
      request.get(host + "/usuarios.json", function(error, response, body) {
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

  describe("GET /usuarios.json?nome=danilo - deve retornar no serviço todos os usuarios que tenham o nome de danilo", function() {
    beforeEach(function(done) {
      Usuario.excluirTodos(function(retorno1){
        var usuario = new Usuario();
        usuario.nome = "Danilo com teste";
        usuario.login = "didox";
        usuario.senha = "123";
        usuario.email = "danilo@beminfinito.com.br";
        usuario.salvar(function(retorno2){
          Usuario.todos(function(retorno3){
            if(!retorno3.erro){
              usuarioCadastrado = retorno3.usuarios[0];
            }
            done();
          });
        });
      });
    });

    it("deve retornar o status code de 200 e retornar o danilo no serviço", function(done) {
      request.get(host + "/usuarios.json?nome=danilo", function(error, response, body) {
        if(response === undefined){
          console.log("Não consegui localizar o servidor");
          expect(503).toBe(200);
        }
        else{
          expect(response.statusCode).toBe(200);
          var json = JSON.parse(response.body);
          expect(json.length).toBe(1);
          expect(json[0].nome).toBe("Danilo com teste");
        }
        done();
      });
    });
  });

  describe("GET /usuarios/1.json - deve retornar no serviço somente 1 usuário", function() {
    it("deve retornar o status code de 200 e retornar somente 1 usuário", function(done) {
      Usuario.truncateTable(function(retorno1){
        var usuario = new Usuario();
        usuario.nome = "Danilo com teste";
        usuario.login = "didox";
        usuario.senha = "123";
        usuario.email = "danilo@beminfinito.com.br";
        usuario.salvar(function(retorno2){
          request.get(host + "/usuarios/1.json", function(error, response, body) {
            if(response === undefined){
              console.log("Não consegui localizar o servidor");
              expect(503).toBe(200);
            }
            else{
              expect(response.statusCode).toBe(200);
              var json = JSON.parse(response.body);
              expect(json.id).toBe(1);
              expect(json.nome).not.toBe(undefined);
            }
            done();
          });
        });
      });
    });
  });


  describe("POST /usuarios.json - deve criar um usuário", function() {
    it("deve retornar o status code de 201", function(done) {

      request.post({url: host + "/usuarios.json", form: {nome:'Joao 123', login:'joao', senha:'123', email:'joao@teste.com.br'}}, function(error, response, body) {
        if(response === undefined){
          console.log("Não consegui localizar o servidor");
          expect(503).toBe(200);
        }
        else{
          expect(response.statusCode).toBe(201);
          var json = JSON.parse(response.body);
          expect(json.mensagem).toBe("Usuário criado com sucesso");
        }
        done();
      });
    });
  });

  describe("PUT /usuarios.json - deve atualizar um usuário", function() {
    var usuarioCadastrado; 

    beforeEach(function(done) {
      Usuario.excluirTodos(function(retorno1){
        var usuario = new Usuario();
        usuario.nome = "usuário para atualizar";
        usuario.login = "didox";
        usuario.senha = "123";
        usuario.email = "danilo@beminfinito.com.br";
        usuario.salvar(function(retorno2){
          Usuario.todos(function(retorno3){
            if(!retorno3.erro){
              usuarioCadastrado = retorno3.usuarios[0];
            }
            done();
          });
        });
      });
    });

    it("deve retornar o status code de 200", function(done) {
      usuarioCadastrado.nome = "nome atualizado";
      request.put({url: host + "/usuarios.json", form: usuarioCadastrado}, function(error, response, body) {
        if(response === undefined){
          console.log("Não consegui localizar o servidor");
          expect(503).toBe(200);
        }
        else{
          expect(response.statusCode).toBe(200);
          var json = JSON.parse(response.body);
          expect(json.mensagem).toBe("Usuário atualizado com sucesso");

          Usuario.buscarPorID(usuarioCadastrado.id, function(retorno){
            expect(retorno.usuario.nome).toBe("nome atualizado");
            done();
          });
        }
        done();
      });
    });

    it("deve retornar o status code de 200", function(done) {
      request.put({url: host + "/usuarios.json", form: {}}, function(error, response, body) {
        if(response === undefined){
          console.log("Não consegui localizar o servidor");
          expect(503).toBe(200);
        }
        else{
          expect(response.statusCode).toBe(400);
        }
        done();
      });
    });
  });

});