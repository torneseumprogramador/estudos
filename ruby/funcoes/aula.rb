require 'byebug'

# def teste(*parametros)
# 	return 1 if parametros.include? 2
# 	a = "aa" + 1
# 	1 + 420 - 3
# rescue Exception => e
# 	puts "Opa aconteceu erro"
# 	puts e.message
# end

# a = teste 1,5,3,4,5,6

# puts a

def captura_aluno
	aluno = {}
	puts "Digite o nome do aluno"
	aluno[:nome] = gets.delete("\n")

	puts "Digite telefone do aluno"
	aluno[:tel] = gets.delete("\n")

	aluno
end

def mostrar_alunos(alunos)
	alunos.each do |aluno|
		puts "======================================"
		puts "aluno: #{aluno[:nome]}, telefone: #{aluno[:tel]}"
	end
end

loop do 
	puts "Bem vindo ao programa"	
	puts "Digite 0 para sair ou 1 para continuar"
	valor = gets.to_i

	break if(valor == 0)
	
	alunos = []
	3.times do 
		alunos << captura_aluno
	end

	mostrar_alunos(alunos)
end
