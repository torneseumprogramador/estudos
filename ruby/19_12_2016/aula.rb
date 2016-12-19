require 'byebug'



a = 1
b = 2
c = 4


if 1==1 or 2 ==2
	puts "entrou no if"
end

unless b==1 && a==3
	puts "mostrou unless 1"
end

unless b==1 and a==3
	puts "mostrou unless 1"
end

while( a<=b || b>c)
	puts "olá"
	a += 1 
end


puts 24.eql?(12*2) 

debugger
puts 12 <=> 12