# missings
require 'byebug'

class Danilo
  def self.method_missing(nome, parametro)
    nome = nome.to_s

    if nome =~ /busca_por_/
      puts "Bucando no arquivo por #{nome.gsub("busca_por_", "")}, com o valor #{parametro}"
      return
    end

    puts "Metodo de classe #{nome}, não exite na classe #{self}"
  end

  def method_missing(nome)
    nome = nome.to_s
    File.open("database/Danilo.csv") do |arquivo|
      arquivo.each do |linha|
        campos = linha.split(";")

        unless campos.include?(nome)
          puts "Campo #{nome}, não existe no csv database/Danilo.csv"
        end

      end
    end

    return nil
  end
end

# puts Danilo.teste
puts Danilo.busca_por_dsdsdse("jsssoao")


# class Danilo
#   def self.const_missing(nome)
#     puts "Não existe a constante #{nome} na classe #{self}"
#   end
# end

# Danilo::TESTE


# class Danilo
#   def method_missing(nome)
#     puts "Não existe a propriedade #{nome} na classe #{self.class}"
#   end

#   def self.method_missing(nome)
#     puts "Não existe a propriedade de classe #{nome} na classe #{self}"
#   end
# end

# Danilo.new.nome
# Danilo.teste