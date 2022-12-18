@reviews.each do |review|
  json.set! review.id do
    json.extract! review,
      :id,
      :users_id,
      :donut_id,
      :title,
      :body,
      :rating

      #json.name review.user.name
  end
end