var Singleton = {
	instancia: null,

	iniciar: function(){
		function Sgln(){
			this.nome = "";
			this.MostrarNaTela = function(){
				alert("Estou dando aula para vcs com a minha filha aqui do lado.")
			}
		}

		if(Singleton.instancia == null){
			Singleton.instancia = new Sgln();
		}
	}
}