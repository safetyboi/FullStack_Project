class Review < ApplicationRecord
    validates :users_id, :donut_id, :title, presence: true
    validates :donut_id, uniqueness: {scope: :users_id}
    validates :rating, numericality: {in: 1..5}
  
    
    belongs_to :user
    belongs_to :donut
end
