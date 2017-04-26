Pagina = require("../models/pagina");

var PaginasController = {
  index: function(request, response, next) {
    Pagina.todos(function(paginas){
      response.render('paginas/index', { 
        title: 'Trazer os dados da API',
        paginas: paginas
      });
    });
  },
  editar: function(request, response, next) {

    new Pagina({id:request.params.id}).buscar(function(pagina){

      if(pagina.erro !== undefined){
        response.redirect('/paginas/novo?erro=' + pagina.mensagem);
      }
      else{
        response.render('paginas/alterar', { 
          pagina: pagina
        });
      }
    });
  },
  preview: function(request, response, next) {
    new Pagina({id:request.params.id}).buscar(function(pagina){
      response.send(pagina.conteudo);
    });
  },
  atualizar: function(request, response, next) {
    var pagina = new Pagina();
    pagina.id = request.params.id;
    pagina.nome = request.body.nome;
    pagina.conteudo = request.body.conteudo;
    pagina.salvar(function(retorno){
      if(retorno.erro){
        response.redirect('/paginas/novo?erro=' + retorno.mensagem);
      }
      else{
        response.redirect('/paginas');
      }
    });
  },
  excluir: function(request, response, next) {
    var pagina = new Pagina();
    pagina.id = request.params.id;
    pagina.excluir(function(retorno){
      if(retorno.erro){
        response.redirect('/paginas/novo?erro=' + retorno.mensagem);
      }
      else{
        response.redirect('/paginas');
      }
    });
  },
  novo: function(request, response, next) {
    var erro = request.query.erro;
    if(erro === undefined){
      erro = "";
    }
    response.render('paginas/novo', {erro: erro});
  },
  cadastrar: function(request, response, next) {
    var pagina = new Pagina();
    pagina.nome = request.body.nome;
    pagina.conteudo = request.body.conteudo;
    pagina.salvar(function(retorno){
      if(retorno.erro){
        response.redirect('/paginas/novo?erro=' + retorno.mensagem);
      }
      else{
        response.redirect('/paginas');
      }
    });
  }
};

module.exports = PaginasController;
