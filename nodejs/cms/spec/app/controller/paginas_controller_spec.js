var request = require("request");
var host = "http://localhost:3000";
var Pagina = require("../../../app/models/pagina");

describe("O controller de paginas", function() {
	describe("GET /paginas.json - deve retornar no serviço todos os paginas cadastrados", function() {
		it("deve retornar o status code de 200", function(done) {
      request.get(host + "/paginas.json", function(error, response, body) {
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

  describe("GET /paginas.json?nome=pagina - deve retornar no serviço todos os paginas que tenham o nome de danilo", function() {
    beforeEach(function(done) {
      Pagina.excluirTodos(function(retorno1){
        var pagina = new Pagina();
        pagina.nome = "pagina teste";
        pagina.conteudo = "bla nla";
        pagina.salvar(function(retorno2){
          Pagina.todos(function(retorno3){
            if(!retorno3.erro){
              paginaCadastrado = retorno3.paginas[0];
            }
            done();
          });
        });
      });
    });

    it("deve retornar o status code de 200 e retornar o danilo no serviço", function(done) {
      request.get(host + "/paginas.json?nome=pagina", function(error, response, body) {
        if(response === undefined){
          console.log("Não consegui localizar o servidor");
          expect(503).toBe(200);
        }
        else{
          expect(response.statusCode).toBe(200);
          var json = JSON.parse(response.body);
          expect(json.length).toBe(1);
          expect(json[0].nome).toBe("pagina teste");
        }
        done();
      });
    });
  });

  describe("GET /paginas/1.json - deve retornar no serviço somente 1 Pagina", function() {
    it("deve retornar o status code de 200 e retornar somente 1 Pagina", function(done) {
      Pagina.truncateTable(function(retorno1){
        var pagina = new Pagina();
        pagina.nome = "pagina teste2";
        pagina.conteudo = "bla bla";
        pagina.salvar(function(retorno2){
          request.get(host + "/paginas/1.json", function(error, response, body) {
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

    it("deve retornar o status code de 404 para pagina não cadastrado", function(done) {
      Pagina.truncateTable(function(retorno1){
        request.get(host + "/paginas/9999.json", function(error, response, body) {
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

  describe("POST /paginas.json - deve criar um Pagina", function() {
    var token; 
    beforeEach(function(done) {
      request.head(host + "/paginas.json", function(){
        token = this.response.headers.auth_token;
        done();
      });
    });

    it("deve retornar o status code de 201", function(done) {
      request.post({
        url: host + "/paginas.json", 
        headers: {'auth_token': token}, 
        form: {nome:'Nova pagina', conteudo:'babla'}}, 
        function(error, response, body) {
        if(response === undefined){
          console.log("Não consegui localizar o servidor");
          expect(503).toBe(200);
        }
        else{
          expect(response.statusCode).toBe(201);
          var json = JSON.parse(response.body);
          expect(json.mensagem).toBe("Pagina criado com sucesso");
        }
        done();
      });
    });
  });

  describe("PUT /paginas.json - deve atualizar um Pagina", function() {
    var paginaCadastrado;
    var token;

    beforeEach(function(done) {
      Pagina.excluirTodos(function(retorno1){
        var pagina = new Pagina();
        pagina.nome = "Pagina para atualizar";
        pagina.conteudo = "bla conteudo";
        pagina.salvar(function(retorno2){
          Pagina.todos(function(retorno3){
            if(!retorno3.erro){
              paginaCadastrado = retorno3.paginas[0];
            }
            request.head(host + "/paginas.json", function(){
              token = this.response.headers.auth_token;
              done();
            });
          });
        });
      });
    });

    it("deve retornar o status code de 200", function(done) {
      paginaCadastrado.nome = "nome atualizado";
      request.put({url: host + "/paginas.json", headers: {'auth_token': token}, form: paginaCadastrado}, function(error, response, body) {
        if(response === undefined){
          console.log("Não consegui localizar o servidor");
          expect(503).toBe(200);
        }
        else{
          expect(response.statusCode).toBe(200);
          var json = JSON.parse(response.body);
          expect(json.mensagem).toBe("Pagina atualizado com sucesso");

          Pagina.buscarPorID(paginaCadastrado.id, function(retorno){
            expect(retorno.pagina.nome).toBe("nome atualizado");
            done();
          });
        }
        done();
      });
    });

    it("deve retornar o status code de 200", function(done) {
      request.put({url: host + "/paginas.json", headers: {'auth_token': token}, form: {}}, function(error, response, body) {
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

  describe("PATCH /paginas/{id}.json - deve atualizar um Pagina", function() {
    var paginaCadastrado; 
    var token;

    beforeEach(function(done) {
      Pagina.excluirTodos(function(retorno1){
        var pagina = new Pagina();
        pagina.nome = "Pagina novo";
        pagina.conteudo = "conteudo";
        pagina.salvar(function(retorno2){
          Pagina.todos(function(retorno3){
            if(!retorno3.erro){
              paginaCadastrado = retorno3.paginas[0];
            }
            request.head(host + "/paginas.json", function(){
              token = this.response.headers.auth_token;
              done();
            });
          });
        });
      });
    });

    it("deve retornar o status code de 200", function(done) {
      request.patch({url: host + "/paginas/" + paginaCadastrado.id + ".json", headers: {'auth_token': token}, form: {
        nome: "Nome da pagina atualizado por patch",
      }}, function(error, response, body) {
        if(response === undefined){
          console.log("Não consegui localizar o servidor");
          expect(503).toBe(200);
        }
        else{
          expect(response.statusCode).toBe(200);
          var json = JSON.parse(response.body);
          expect(json.mensagem).toBe("Pagina atualizado com sucesso");

          Pagina.buscarPorID(paginaCadastrado.id, function(retorno){
            expect(retorno.pagina.nome).toBe("Nome da pagina atualizado por patch");
            done();
          });
        }
        done();
      });
    });
  });

  describe("DELETE /paginas/{id}.json - deve excluir um Pagina", function() {
    var paginaCadastrado;
    var token;

    beforeEach(function(done) {
      Pagina.excluirTodos(function(retorno1){
        var pagina = new Pagina();
        pagina.nome = "pagina para excluir";
        pagina.conteudo = "teste";
        pagina.salvar(function(retorno2){
          Pagina.todos(function(retorno3){
            if(!retorno3.erro){
              paginaCadastrado = retorno3.paginas[0];
            }
            request.head(host + "/paginas.json", function(){
              token = this.response.headers.auth_token;
              done();
            });
          });
        });
      });
    });

    it("deve retornar o status code de 204", function(done) {
      request.delete({url: host + "/paginas/" + paginaCadastrado.id + ".json", headers: {'auth_token': token}}, function(error, response, body) {
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