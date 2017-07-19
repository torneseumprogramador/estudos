class CarrosComCampoAtivo < ActiveRecord::Migration[5.1]
  def change
  	add_column :carros, :ativo, :boolean
  end
end
