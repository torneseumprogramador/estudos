var Pagina = require("../models/pagina");
var Token = require("../models/token");

var PaginasController = {
  head: function(request, response, next){
    new Token().criar(function(retorno){
      response.header('auth_token', retorno.token);
      response.status(204).send("");
    });
  },
  todos: function(request, response, next) {
    if(request.query.nome !== undefined){
      Pagina.buscarPorNome(request.query.nome, function(retorno){
        if(retorno.erro){
          response.status(500).send({
            erro:'Erro ao buscar paginas por nome (' + request.query.nome + ') - (' + retorno.mensagem + ')'
          });
        }
        else{
          response.status(200).send(retorno.paginas);
        }
      });
    }
    else{
      Pagina.todos(function(retorno){
        if(retorno.erro){
          response.status(500).send({
            erro:'Erro ao buscar paginas (' + retorno.mensagem + ')'
          });
        }
        else{
          response.status(200).send(retorno.paginas);
        }
      });
    }
  },
  porId: function(request, response, next){
    Pagina.buscarPorID(request.params.id, function(retorno){
      if(retorno.erro){
        response.status(500).send({
          erro:'Erro ao buscar pagina por id (' + retorno.mensagem + ')'
        });
      }
      else{
        if(retorno.pagina.nome !== undefined){
          response.status(200).send(retorno.pagina);
        }
        else{
          response.status(404).send({mensagem: "Pagina não encontrado"});
        }
      }
    });
  },
  criar: function(request, response, next){
    var token = request.headers.auth_token;
    Token.verificaToken(token, function(retorno){
      if(retorno.tokenValidado){

        Token.apagarToken(token);

        if(request.body.nome === undefined){
          response.status(400).send({
            erro:'Erro ao cadastrar pagina o nome precisa estar preenchido.'
          });
          return;
        }

        var pagina = new Pagina();
        pagina.nome = request.body.nome;
        pagina.conteudo = request.body.conteudo;
        pagina.salvar(function(retorno){
          if(retorno.erro){
            response.status(500).send({
              erro:'Erro ao cadastrar pagina (' + retorno.mensagem + ')'
            });
          }
          else{
            response.status(201).send({mensagem: "Pagina criado com sucesso"});
          }
        });
      }
      else{
        response.status(401).send({
          erro:'Token inválido, você não tem autorização de acessar esta API'
        });
      }
    });
  },
  atualizar: function(request, response, next){
    var token = request.headers.auth_token;
    Token.verificaToken(token, function(retorno){
      if(retorno.tokenValidado){

        Token.apagarToken(token);

        Pagina.buscarPorID(request.body.id, function(retorno){
          if(retorno.pagina.id === undefined){
            response.status(400).send({
              erro:'Erro ao atualizar, id de pagina não encontrado'
            });
          }
          else{
            var pagina = new Pagina();
            pagina.id = request.body.id;
            pagina.nome = request.body.nome;
            pagina.conteudo = request.body.conteudo;
            pagina.salvar(function(retorno){
              if(retorno.erro){
                response.status(500).send({
                  erro:'Erro ao atualizar pagina (' + retorno.mensagem + ')'
                });
              }
              else{
                response.status(200).send({mensagem: "Pagina atualizado com sucesso"});
              }
            });
          }
        });
      }
      else{
        response.status(401).send({
          erro:'Token inválido, você não tem autorização de acessar esta API'
        });
      }
    });
  },
  atualizarPorPatch: function(request, response, next){
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS, PATCH');
    response.header('Access-Control-Allow-Headers', 'Content-Type');

    var token = request.headers.auth_token;
    Token.verificaToken(token, function(retorno){
      if(retorno.tokenValidado){

        Token.apagarToken(token);

        Pagina.buscarPorID(request.params.id, function(retorno){
          if(retorno.pagina.id === undefined){
            response.status(400).send({
              erro:'Erro ao atualizar, id de pagina não encontrado'
            });
          }
          else{
            var pagina = new Pagina(retorno.pagina);

            if(request.body.nome !== undefined && request.body.nome !== ""){
              pagina.nome = request.body.nome;
            }

            if(request.body.conteudo !== undefined && request.body.conteudo !== ""){
              pagina.conteudo = request.body.conteudo;
            }

            pagina.salvar(function(retorno){
              if(retorno.erro){
                response.status(500).send({
                  erro:'Erro ao atualizar pagina (' + retorno.mensagem + ')'
                });
              }
              else{
                response.status(200).send({mensagem: "Pagina atualizado com sucesso"});
              }
            });
          }
        });
      }
      else{
        response.status(401).send({
          erro:'Token inválido, você não tem autorização de acessar esta API'
        });
      }
    });
  },
  excluirPagina: function(request, response, next){
    var token = request.headers.auth_token;
    Token.verificaToken(token, function(retorno){
      if(retorno.tokenValidado){

        Token.apagarToken(token);

        Pagina.excluirPorID(request.params.id, function(retorno){
          if(retorno.erro){
            response.status(500).send({
              erro:'Erro ao excluir pagina (' + retorno.mensagem + ')'
            });
          }
          else{
            response.status(204).send("");
          }
        });
      }
      else{
        response.status(401).send({
          erro:'Token inválido, você não tem autorização de acessar esta API'
        });
      }
    });
  },
  options: function(request, response, next){
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS, PATCH');
    response.header('Access-Control-Allow-Headers', 'Content-Type');
    response.status(204).send("");
  }
};

module.exports = PaginasController;
