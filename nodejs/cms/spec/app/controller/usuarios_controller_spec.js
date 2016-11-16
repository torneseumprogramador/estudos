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

    it("deve retornar o status code de 404 para usuario não cadastrado", function(done) {
      Usuario.truncateTable(function(retorno1){
        request.get(host + "/usuarios/9999.json", function(error, response, body) {
          if(response === undefined){
            console.log("Não consegui localizar o servidor");
            expect(503).toBe(200);
          }
          else{
            expect(response.statusCode).toBe(404);
          }
          done();
        });
      });
    });
  });

  describe("POST /usuarios.json - deve criar um usuário", function() {
    var token; 
    beforeEach(function(done) {
      request.head(host + "/usuarios.json", function(){
        token = this.response.headers.auth_token;
        done();
      });
    });

    it("deve retornar o status code de 201", function(done) {
      request.post({
        url: host + "/usuarios.json", 
        headers: {'auth_token': token}, 
        form: {nome:'Joao 123', login:'joao', senha:'123', email:'joao@teste.com.br'}}, 
        function(error, response, body) {
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
    var token;

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
            request.head(host + "/usuarios.json", function(){
              token = this.response.headers.auth_token;
              done();
            });
          });
        });
      });
    });

    it("deve retornar o status code de 200", function(done) {
      usuarioCadastrado.nome = "nome atualizado";
      request.put({url: host + "/usuarios.json", headers: {'auth_token': token}, form: usuarioCadastrado}, function(error, response, body) {
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
      request.put({url: host + "/usuarios.json", headers: {'auth_token': token}, form: {}}, function(error, response, body) {
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

  describe("PATCH /usuarios/{id}.json - deve atualizar um usuário", function() {
    var usuarioCadastrado; 
    var token;

    beforeEach(function(done) {
      Usuario.excluirTodos(function(retorno1){
        var usuario = new Usuario();
        usuario.nome = "usuário novo";
        usuario.login = "didox";
        usuario.senha = "123";
        usuario.email = "danilo@beminfinito.com.br";
        usuario.salvar(function(retorno2){
          Usuario.todos(function(retorno3){
            if(!retorno3.erro){
              usuarioCadastrado = retorno3.usuarios[0];
            }
            request.head(host + "/usuarios.json", function(){
              token = this.response.headers.auth_token;
              done();
            });
          });
        });
      });
    });

    it("deve retornar o status code de 200", function(done) {
      request.patch({url: host + "/usuarios/" + usuarioCadastrado.id + ".json", headers: {'auth_token': token}, form: {
        nome: "Nome atualizado por patch",
      }}, function(error, response, body) {
        if(response === undefined){
          console.log("Não consegui localizar o servidor");
          expect(503).toBe(200);
        }
        else{
          expect(response.statusCode).toBe(200);
          var json = JSON.parse(response.body);
          expect(json.mensagem).toBe("Usuário atualizado com sucesso");

          Usuario.buscarPorID(usuarioCadastrado.id, function(retorno){
            expect(retorno.usuario.nome).toBe("Nome atualizado por patch");
            done();
          });
        }
        done();
      });
    });
  });

  describe("DELETE /usuarios/{id}.json - deve excluir um usuário", function() {
    var usuarioCadastrado;
    var token;

    beforeEach(function(done) {
      Usuario.excluirTodos(function(retorno1){
        var usuario = new Usuario();
        usuario.nome = "usuáro para excluir";
        usuario.login = "didox";
        usuario.senha = "123";
        usuario.email = "danilo@beminfinito.com.br";
        usuario.salvar(function(retorno2){
          Usuario.todos(function(retorno3){
            if(!retorno3.erro){
              usuarioCadastrado = retorno3.usuarios[0];
            }
            request.head(host + "/usuarios.json", function(){
              token = this.response.headers.auth_token;
              done();
            });
          });
        });
      });
    });

    it("deve retornar o status code de 204", function(done) {
      request.delete({url: host + "/usuarios/" + usuarioCadastrado.id + ".json", headers: {'auth_token': token}}, function(error, response, body) {
        if(response === undefined){
          console.log("Não consegui localizar o servidor");
          expect(503).toBe(200);
        }
        else{
          expect(response.statusCode).toBe(204);
        }
        done();
      });
    });
  });

});