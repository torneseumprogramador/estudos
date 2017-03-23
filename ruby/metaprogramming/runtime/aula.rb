require 'byebug'

# def String.mostrar_nova_string2
#   "nova string"
# end

# a = "danilo"
# debugger

# def a.mostrar_nova_string
#   "nova string"
# end

# x = ""

puts "[[[[Inicio: #{self}]]]]"
class Carro

  puts "[[[[Class: #{self}]]]]"

  def initialize(nome = "Modelo padrão")
    @nome = nome
  end

  attr_accessor :nome, :porta, :painel, :roda
  attr_reader :pneu

  def mostrar(marca="Marca padrão")
    puts "[[[[Method: #{self}]]]]"
    "Marca: #{marca} - Modelo: #{self.nome}"
  end


  def self.metodo_de_classe
    "de classe"
  end

end

def Carro.metodo_de_classe2
  "de classe"
end


puts "[[[[Fim: #{self}]]]]"

fiesta = Carro.new
golf = Carro.new

# def fiesta.mostrar
#   "Mostrar do fiesta"
# end

# def golf.mostrar
#   "Mostrar do golf"
# end


debugger



x = ""







# class Carro

#   # puts "instancia #{self}"

#   def initialize(nome = "Modelo padrão")
#     @nome = nome
#   end

#   def nome=(value)
#     @nome = value
#   end

#   def nome
#     @nome
#   end

#   def mostrar(marca="Marca padrão")
#     puts "Marca: #{marca} - Modelo: #{self.nome}"
#   end

#   def self.um_metodo
#     "um outro metodo"
#   end
# end

# Carro.new.mostrar

# def Carro.outro
#   "teste"
# end

# def String.mais_um_metodo
#   "mais um metodo"
# end

# a = Carro.new
# def a.outro
#   "teste2"
# end

# a = "uma instancia de string"
# def a.outro2
#   "teste2"
# end


# puts a.outro2


# puts "instancia #{self}"