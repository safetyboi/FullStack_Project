json.cart_item do
  json.extract! @cart_item, :id, :donut_id, :donut_name, :quantity, :donut_price, :created_at, :updated_at
  json.imageURL @cart_item.donut.photos.map {|photo| photo.url}
end


# cart_item: {
#  id:,
#  donut p_id:
# }

