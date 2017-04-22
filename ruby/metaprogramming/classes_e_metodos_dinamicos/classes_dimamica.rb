require 'byebug'
# Definir Várias classes em runtime
def definir_classe(classe)
  classe = classe.capitalize
  eval("class #{classe} end")
end

["Classe1", "classe2", "Classe3"].each do |classe|
  definir_classe(classe)
end

debugger

x = ""
