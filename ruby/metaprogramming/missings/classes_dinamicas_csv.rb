# missings
require 'byebug'

# class Module
#   old_const_missing = instance_method(:const_missing)

#   define_method(:const_missing) do |nome|
#     existe = File.exist?("database/#{nome}.csv")
#     if !existe
#       puts "Classe #{nome} não encontrada"
#       return
#     end

#     old_const_missing.bind(self).call(nome)
#   end
# end

class Module
  def const_missing(nome)
    existe = File.exist?("database/#{nome}.csv")
    unless existe
      puts "Classe #{nome} não encontrada, porque não existe nenhum csv no diretório database"
      return
    end
    const_set(nome, Class.new)
    klass = const_get(nome)

    File.open("database/#{nome}.csv") do |arquivo|
      arquivo.each do |linha|
        campos = linha.split(";")

        campos.each do |campo|
          klass.class_eval do

            define_method("#{campo}=") do |value|
              instance_variable_set "@#{campo}", value
            end

            define_method("#{campo}") do
              instance_variable_get "@#{campo}"
            end

          end
        end

        break

      end
    end

    klass
  end
end

d = Pessoa.new
d.nome = "danilo teste"
puts d.nome

puts d.methods - Class.methods
