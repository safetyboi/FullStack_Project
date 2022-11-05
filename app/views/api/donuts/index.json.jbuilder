
@donuts.each do |donut|
    json.set! donut.id do
        json.extract! donut, :id, :name, :donut_type, :price, :description, :created_at, :updated_at
    end
end
