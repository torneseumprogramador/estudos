json.extract! carro, :id, :nome, :marca, :valor, :quantidade, :created_at, :updated_at
json.url carro_url(carro, format: :json)
