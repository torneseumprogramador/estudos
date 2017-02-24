class Fiesta < Carro
  attr_accessor :cor

  def mostrar_privado
  	# algo_mais
  	Carro.new.algo_mais
  end

  def mostrar_protegido
  	# algo_mais_protected
  	Carro.new.algo_mais_protected
  end
end