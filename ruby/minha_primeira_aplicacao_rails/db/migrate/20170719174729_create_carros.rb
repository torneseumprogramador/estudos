class CreateCarros < ActiveRecord::Migration[5.1]
  def change
    create_table :carros do |t|
      t.string :nome
      t.string :marca
      t.float :valor
      t.integer :quantidade

      t.timestamps
    end
  end
end
