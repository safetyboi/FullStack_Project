class CreateCartItems < ActiveRecord::Migration[7.0]
  def change
    create_table :cart_items do |t|
      t.references :donut, foreign_key: true, null: false, index: true
      t.bigint :quantity, null: false
      t.bigint :donut_price, null: false
      t.bigint :donut_name, null: false
      t.timestamps
    end
  end
end
