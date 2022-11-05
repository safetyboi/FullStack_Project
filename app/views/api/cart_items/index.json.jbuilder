@cart_items.each do |cart_item|
    json.set! cart_item.id do
        json.extract! cart_item, :donut_id, :donut_name, :donut_price, :quantity, :created_at, :updated_at
    end
end