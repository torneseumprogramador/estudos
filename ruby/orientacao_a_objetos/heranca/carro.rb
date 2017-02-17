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