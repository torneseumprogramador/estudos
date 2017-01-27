require 'byebug'

class Carro

  def initialize(nome = "Modelo padrão")
    @nome = nome
  end

  def nome=(value)
    @nome = value
  end

  def nome
    @nome
  end

  def mostrar(marca="Marca padrão")
    puts "Marca: #{marca} - Modelo: #{self.nome}"
  end
end

Carro.new.mostrar