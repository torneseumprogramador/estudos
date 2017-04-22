require 'byebug'

#==================================
# Definir Classe em runtime
classe = "danilo"
debugger
classe.capitalize!
eval("class #{classe} end")
classe = Object.const_get(classe)
puts classe
