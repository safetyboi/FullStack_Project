class Donut < ApplicationRecord
    validates :name, :donut_type, :price, :description, presence: true

    has_many :cart_items 
    has_many_attached :photos
end
