@cart_items.each do |cart_item|
    json.set! cart_item.id do
        json.extract! cart_item, :id, :donut_id, :donut_name, :donut_price, :quantity, :created_at, :updated_at
        json.imageURL cart_item.donut.photos.map {|photo| photo.url}
    end
end

#this is the @donut-version:
# json.imageURL donut.photos.map {|photo| photo.url} 

#this is one @cart_item version:
#json.donut.imageURL donut.photos.map {|photo| photo.url}

#this is another:
#json.imageURL cart_item.donut.photos.map {|photo| photo.url}




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


