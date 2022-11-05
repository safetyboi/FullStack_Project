class CartItem < ApplicationRecord
    validates :donut_id, :quantity, :donut_price, :donut_name, presence: true

    # belongs_to :user
end
