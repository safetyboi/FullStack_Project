@cart_items.each do |cart_item|
    json.set! cart_item.id do
        json.extract! cart_item, :id, :donut_id, :donut_name, :donut_price, :quantity, :created_at, :updated_at
    end
end

#     1:{
#         id: 2,
#         d_i: 5,
#         name: "glazed" 
#     } ,   
#     2:{
#         id: 2,
#         d_i: 5,
#         name: "glazed" 
#     } 


