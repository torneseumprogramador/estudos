# hooks (ganchos)
require 'byebug'

# module UmModulo
#   def self.included(klass)
#     puts "Modulo #{self} incluido em #{klass}"
#   end

#   def self.extended(klass)
#     puts "Modulo #{self} extendido em #{klass}"
#   end

#   def instancia
#     "metodo de instancia"
#   end

#   def self.de_classe
#     "metodo de classe"
#   end
# end

# class Teste
#   include UmModulo
# end

# class Teste2
#   extend UmModulo
# end

# class Teste3
#   extend UmModulo
# end

# debugger

# class Teste
#   extend UmModulo
# end

# puts Teste.new


############ inherited (Herdado) ##############
# class Pai
#   def self.inherited(klass)
#     puts "A classe #{klass} herda de #{self}"
#   end
# end

# class Filho < Pai
# end

# class Danilo < Pai
# end

# class Lana < Pai
# end
# puts Filho.new


############ inherited (Herdado) ##############
class Pai
  def self.inherited(klass)
    puts "A classe #{klass} herda de #{self}"
    @classes ||= []
    @classes << klass
  end

  def self.lista_de_classes
    @classes
  end
end

class Filho < Pai
  def mostre_o_nome
    "Leandro"
  end
end

class Filho2 < Pai
  def mostre_o_nome
    "Gustavo"
  end
end

class Filho3 < Pai
  def mostre_o_nome
    "Jose"
  end
end

class Filho4 < Pai
  def mostre_o_nome
    "Fabiana"
  end
end

debugger

Pai.lista_de_classes.map{|f| f.new.mostre_o_nome}

puts Pai.lista_de_classes
