require 'byebug'

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

debugger

x = ""