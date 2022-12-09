@reviews.each do |review|
  json.set! review.id do
    json.extract! review,
      :id,
      :user_id,
      :donut_id,
      :title,
      :body,
      :rating

      json.name  #how is this getting used?
    review.user.name
  end
end