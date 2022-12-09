json.extract! @review,
  :id,
  :user_id,
  :donut_id,
  :title,
  :body,
  :rating

json.name  #how is this getting used?
@review.user.name