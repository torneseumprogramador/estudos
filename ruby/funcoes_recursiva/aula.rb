require 'byebug'
require 'active_support/all'
require 'httparty'

def captura_servico(pagina=1)
  #TODO: capturar dados do serviço: http://localhost:3000/usuarios.json
  # puts "Implementar o dado para buscar da API #{i}"
  # return if i == 3
  # captura_servico(i+1)

  uri = URI("http://localhost:3000/usuarios.json?pagina=#{pagina}")
  request = Net::HTTP.get_response(uri)
  if request.code == "200"
    dados = JSON.parse(request.body)
    dados.each do |dado|
      puts "===================================="
      puts dado["id"]
      puts dado["nome"]
      puts dado["login"]
      puts dado["senha"]
      puts dado["email"]
      puts "===================================="
    end
    captura_servico(pagina + 1) if dados.size > 0
  end

end

captura_servico
