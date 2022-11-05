class ChangeCartItems < ActiveRecord::Migration[7.0]
  def change
    change_column :cart_items, :donut_name, :string
  end
end
