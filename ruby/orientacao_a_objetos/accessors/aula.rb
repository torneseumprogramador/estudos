require 'byebug'

class Carro

  def initialize(nome = "Modelo padrão")
    @nome = nome
  end

  attr_accessor :nome, :porta, :painel, :roda
  attr_reader :pneu

  def mostrar(marca="Marca padrão")
    puts "Marca: #{marca} - Modelo: #{self.nome}"
  end
end

carro = Carro.new

debugger

Carro.new.mostrar

# def attr_accessor(*args)
#   args.each do |propriedade|
#     eval("
#         def #{propriedade}=(value)
#           @#{propriedade} = value
#         end

#         def #{propriedade}
#           @#{propriedade}
#         end
#     ")
#   end
# end