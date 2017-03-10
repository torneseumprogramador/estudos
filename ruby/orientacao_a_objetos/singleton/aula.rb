require 'byebug'

require_relative 'instancia_unica'

instancia = InstanciaUnica.instance

debugger

puts InstanciaUnica.new

x = ""