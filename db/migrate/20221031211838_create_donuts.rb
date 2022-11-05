class CreateDonuts < ActiveRecord::Migration[7.0]
  def change
    create_table :donuts do |t|
      t.string :name, null: false
      t.string :type, null: false, index: true
      t.bigint :price, null: false
      t.text :description, null: false
      t.timestamps
    end
  end
end
