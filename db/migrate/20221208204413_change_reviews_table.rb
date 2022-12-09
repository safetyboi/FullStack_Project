class ChangeReviewsTable < ActiveRecord::Migration[7.0]
  def change
    add_reference :reviews, :users, index: true
  end
end
