require 'byebug'
# h = {}
# puts "string".class
# puts 1.class
# puts 1.class.superclass
# puts 1.class.superclass.superclass
# puts 4.3.class
# puts 4.3.class.superclass
# puts nil.class
# puts h.class
# puts :symbol.class
# puts [].class
# puts (1..8).class

A = 4

class Teste
	# def initialize
	# 	@a = 4
	# end

	# @@a = 4

	def a
		A
	end
end

class Teste1 < Teste
	# def initialize
	# 	@a = 4
	# end

	# @@a = 4

	def a
		A
	end
end

# @a = 2
# puts @a

# @@a = 3
# puts @@a

# $a = 4
# puts $a

# A = 5
# puts A


