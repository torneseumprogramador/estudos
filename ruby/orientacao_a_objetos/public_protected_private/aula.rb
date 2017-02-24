require 'byebug'

require_relative 'carro'
require_relative 'fiesta'
require_relative 'golf'


golf = Golf.new
fiesta = Fiesta.new
carro = Carro.new

debugger

Carro.new.mostrar