var Abstracao = function(){
  if (this.constructor === Abstracao) {
    throw new Error("Não pode instanciar classe abstrata!");
  }
}
Abstracao.prototype.nome = "";
Abstracao.prototype.telefone = "";
Abstracao.prototype.cpf = "";
Abstracao.prototype.GravarEmMomoria = function(){
  throw new Error("Obrigatório a implementação do método GravarEmMomoria, para classes filhas");
}