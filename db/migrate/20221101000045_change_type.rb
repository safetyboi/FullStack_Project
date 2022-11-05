class ChangeType < ActiveRecord::Migration[7.0]
  def change
    rename_column :donuts, :type, :donut_type
  end
end
