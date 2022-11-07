class Api::DonutsController < ApplicationController

    def index
        @donuts = Donut.all 
        render :index 
    end

    def show
        @donut = Donut.find_by(id: params[:id])
        @reviews = @donut.reviews
        render :show
    end

    private

    def donut_params
        params.require(:donut).permit(:name, :donut_type, :price, :description)
      end


end
