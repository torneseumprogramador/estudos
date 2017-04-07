require 'byebug'

#lambda não aceita mais parametros do que os definidos
#lambda retorno dentro do proprio lambda
l = lambda {|param| param * 5}
puts l.call(4)

l = lambda do |p1, p2| 
  p1 + p2
end
puts l.call(4, 5)


# puts "ini"
# def method
#   puts "indi"
#   l = lambda {return "s"}
#   puts l.call
#   puts "inei"
# end
# method
# puts "fim"

########################################################
#lambda aceita mais parametros do que os definidos
#lambda retorno do metodo inteiro

l = Proc.new do |param, p2, p3|
  puts param
  puts p2
  puts p3
end

l.call(4)



# puts "ini"
# def method
#   puts "indi"
#   l = Proc.new {return "dd"}
#   puts l.call
#   puts "inei"
# end
# method
# puts "fim"

########################################################

def metodo_para_definir_bloco(&bloco)
  bloco
end

l = metodo_para_definir_bloco do |param| 
  param * 5
end


puts l.call(4)

l = metodo_para_definir_bloco do 
  puts "danilo"
end

# debugger

l.call

# debugger

########################################################
# convert string na linguagem
eval "puts 'danilo'"
########################################################

atr = "danilo"

eval("
  def #{atr}(value)
    @#{atr} = value
  end
")

eval("
  def mostra
    @#{atr}
  end
")

danilo('dssds')
mostra


########################################################

#definindo metodos dinamicos

class Teste
  def inicio
    def fim
    end
  end
end

t = Teste.new
# t.fim
t.inicio
t.fim

########################################################

class Teste
  def self.definir(valor)
    define_method(valor) do |param1, param2|
      puts "#{param1} - #{param2}"
    end
  end

  def self.atributo(valor)
    define_method(valor) do |param1|
      puts param1
    end
  end
end

['set_nome', 'set_telefone', 'set_endereco'].each do |atr|
  Teste.atributo(atr)
end

teste = Teste.new


# Teste.new.novo_metodo('danilo', 'que legal')

########################################################
module AtributosDinamicos
  def atributos(*atrs)
    atrs.each do |atr|
      define_method("#{atr}=") do |value|
        instance_variable_set "@#{atr}", value
      end

      define_method("#{atr}") do
        instance_variable_get "@#{atr}"
      end
    end
  end

  def atributos_somente_leitura(*atrs)
    atrs.each do |atr|
      define_method("#{atr}") do
        instance_variable_get "@#{atr}"
      end
    end
  end
end

class Teste
  extend AtributosDinamicos
  atributos :nome, :telefone, :cpf
  # atributos_somente_leitura :nome, :telefone, :cpf
  # attr_accessor :nome, :telefone
end

t = Teste.new
# debugger
t.nome = "danilo"
t.telefone = "3334343"


puts "#{t.nome}, #{t.telefone}"


# debugger



x = ""