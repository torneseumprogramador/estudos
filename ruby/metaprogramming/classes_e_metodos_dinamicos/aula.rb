require 'byebug'

#==================================
# Definir Classe em runtime
classe = "danilo"
classe = classe.capitalize
eval("class #{classe} end")
classe = Object.const_get(classe)
puts classe

#==================================
# Definir Metodo em runtime
class Teste
  def self.definir(nome_metodo)
    define_method(nome_metodo) do 
      puts "metodo em runtime"
    end
  end
end

Teste.definir("teste")

Teste.new.teste

#==================================
# Definir Várias classes em runtime
def definir_classe(classe)
  classe = classe.capitalize
  eval("class #{classe} end")
  classe = Object.const_get(classe)
end

["Classe1", "Classe2", "Classe3"].each do |classe|
  definir_classe(classe)
end


#==================================
# Definir Vários metodos em runtime
class Teste
  def self.definir(*metodos)
    metodos.each do |metodo|
      define_method(metodo) do 
        puts "metodo em runtime"
      end
    end
  end
end

Teste.definir("metodo1", "metodo2", "metodo3")
a = Teste.new
puts a.methods - Class.methods

#==================================
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


#==================================
#definir várias classes e metodos em runtime utilizando hash
def definir_classe(classe, nome_metodo)
  if(classe.is_a?(String))
    eval("class #{classe} end");
    classe = Object.const_get(classe)
  end

  classe.class_eval do
    define_method(nome_metodo) do |*params|
      puts "o valor dos parametros é: #{params.join(", ")}"
    end
  end
end

{
  "Danilo" => ["mostrar", "exibir", "visualizar"], 
  "Sheila" => ["mostrar", "exibir", "visualizar"], 
  "Lana" => ["mostrar", "exibir", "visualizar"]
}.each do |classe, metodos|
  metodos.each do |metodo|
    definir_classe(classe, metodo)
  end
end

puts Danilo.new.methods - Class.methods
puts Sheila.new.methods - Class.methods
puts Lana.new.methods - Class.methods


# Danilo.new.mostrar 1,2,3
# Danilo.new.exibir 1,2,3
# Danilo.new.visualizar 1,2,3


# debugger
  

x = ""