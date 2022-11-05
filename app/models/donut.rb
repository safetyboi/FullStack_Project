class Donut < ApplicationRecord
    validates :name, :donut_type, :price, :description, presence: true

    has_one_attached :photo
end
