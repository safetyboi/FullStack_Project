Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :donuts, only: [:index, :show] do
      resources :reviews, only: [:index]
    end
    resources :cart_items, only: [:create, :update, :destroy, :index, :show]
    resources :reviews, only: [:create, :update, :destroy, :show]
    resource :session, only: [:show, :create, :destroy]
  end

  post '/api/test', to: 'application#test'
#must remain LAST route:
  get '*path', to: "static_pages#frontend_index"
#do not put any more routes below this line
end
