class Fiesta < Carro
  attr_accessor :cor

  def mostrar
    puts "OIIII ---- #{super}"
  end

  def mostrar2(d,r)
    puts "Osssssss - #{d} - #{r}"
  end

  def mostrar2
    puts "Osssssss"
  end

  def mostrar_privado
  	# algo_mais
  	Carro.new.algo_mais
  end

  def mostrar_protegido
  	# algo_mais_protected
  	Carro.new.algo_mais_protected
  end
end