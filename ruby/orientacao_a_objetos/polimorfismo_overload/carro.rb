class Carro

  def initialize(nome = "Modelo padrão")
    @nome = nome
  end

  attr_accessor :nome, :porta, :painel, :roda
  attr_reader :pneu

  def mostrar(marca="Marca padrão")
    "Marca: #{marca} - Modelo: #{self.nome} - #{algo_mais_protected}"
  end

  private

  def algo_mais
  	"este é um metodo privado para retornar algo a mais"
  end

  def algo_mais2
  	"este é um metodo privado para retornar algo a mais"
  end
  
  def algo_mais3
  	"este é um metodo privado para retornar algo a mais"
  end
  
  def algo_mais4
  	"este é um metodo privado para retornar algo a mais"
  end

  public

  def algo_mais_publico
  	"este é um metodo publico para retornar algo a mais"
  end

  protected

  def algo_mais_protected
  	"este é um metodo protegido para retornar algo a mais"
  end

end