class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :donut
      t.text :body
      t.integer :rating, null: false
      t.string :title, null: false

      t.timestamps
    end
  end
end
