json.donut do
  json.imageURL @donut.photos {|photo| photo.url} 
  json.extract! @donut, :id, :name, :donut_type, :price, :description, :created_at, :updated_at
end

