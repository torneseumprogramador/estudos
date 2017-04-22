require 'byebug'

#definir classe e metodos em runtime
def definir_classe(classe, nome_metodo)
  if(classe.is_a?(String))
    classe = classe.capitalize
    eval("class #{classe} end");
    classe = Object.const_get(classe)
  end

  classe.class_eval do
    define_method(nome_metodo) do |*params|
      puts "o valor dos parametros é: #{params.join(", ")}"
    end
  end
end

["mostrar", "exibir", "visualizar"].each do |metodo|
  definir_classe("danilo2", metodo)
end

["mostrar", "exibir", "visualizar"].each do |metodo|
  Danilo2.new.send(metodo, 1,2,3)
end

# chamando todos dinamicos
["Danilo", "Sheila", "Lana"].each do |classe|
  ["mostrar", "exibir", "visualizar"].each do |metodo|
    definir_classe(classe, metodo)
    Object.const_get(classe).new.send(metodo, 1,2,3)
  end
end

debugger

x = ""

