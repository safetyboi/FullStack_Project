class Api::SessionsController < ApplicationController
  before_action :require_logged_out, only: [:create]
  before_action :require_logged_in, only: [:destroy]

  def show
    @user = current_user
    if @user
      render 'api/users/show'
      # render  json: {message: 'test'}
    else
      render json: {message: 'no user'}
    end
  end

  def create
    
    username = params[:username]
    email = params[:email]
    password = params[:password]
    @user = User.find_by_credentials(username, email, password)

    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: {errors: ['Invalid credentials']}, status: 422
    end
  end

  def destroy
    logout!
    render json: {message: 'success'}
  end
end

