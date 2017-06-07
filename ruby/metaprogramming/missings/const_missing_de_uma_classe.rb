# missings
require 'byebug'

class Danilo
  TESTE = "123456"
  def self.const_missing(nome)
    puts "Constante #{nome}, não exite na classe #{self}"
  end
end

puts Danilo::TESTE
