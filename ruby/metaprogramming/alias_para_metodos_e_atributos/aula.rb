require 'byebug'

class Danilo
  def ola
    "olha original"
  end
end

######################### Sobresquevendo e perdendo super #########################
# class Danilo2 < Danilo
#   def ola
#     # "teste danilo para mostrar outras coisas " # se não utilizar o super aqui, perdi a referencia do original
#     "olha sobrescrito - " + super
#   end
# end

# danilo2 = Danilo2.new
# debugger
# puts danilo2.ola # perco a referencia do 1

######################### Com alias #########################

# class Danilo2 < Danilo
#   alias_method :ola_original, :ola
  
#   def ola
#     "olha sobrescrito"
#   end

#   def todos
#     ola_original + ' ---- ' + ola
#     # send("ola_original") + ' ---- ' + ola # mais dinamico ainda
#   end
# end

# danilo2 = Danilo2.new
# debugger
# puts danilo2.ola
# puts danilo2.todos

######################### Com modulo #########################
# module ModuloOverwite
#   def metodo(nome)

#     original_metodo_nome = "#{nome.to_s}_original"
#     alias_method original_metodo_nome, nome

#     define_method(nome) do
#       "teste danilo para mostrar outras coisas, agora dentro do modulo"
#     end

#     # parece que rola mais não rola
#     # def todos
#     #   send(original_metodo_nome) + ' ---- ' + send(nome)
#     # end

#     # parece que rola mais não rola
#     # self.class_eval do
#     #   def todos
#     #     send(original_metodo_nome) + ' ---- ' + send(nome)
#     #   end
#     # end

#     define_method("todos") do
#       send(original_metodo_nome) + ' ---- ' + send(nome)
#     end
#   end
# end

# class Danilo2 < Danilo
#   extend ModuloOverwite
#   metodo :ola
# end

# danilo2 = Danilo2.new
# debugger
# puts danilo2.ola
# puts danilo2.todos


######################## Com modulo passando bloco callback #########################
module ModuloOverwite
  def metodo(nome, &bloco)
    original_metodo_nome = "original_#{nome.to_s}"
    alias_method original_metodo_nome, nome

    define_method(nome, &bloco)

    define_method("todos") do
      send(original_metodo_nome) + ' ---- ' + send(nome)
    end
  end
end

class Danilo2 < Danilo
  extend ModuloOverwite
  metodo :ola do
    "teste danilo para mostrar outras coisas, agora dentro do modulo, agora com o bloco customizado"
  end
end

danilo2 = Danilo2.new
debugger
puts danilo2.ola
puts danilo2.todos



x = ""

