class Api::ReviewsController < ApplicationController

    def create
      debugger
        @review = Review.new(review_params)
      debugger
        if @review.save
          debugger
          render :show
        else
          render json: {errors: @review.errors.full_messages}, status: :uprocessable_entity
        end
      end
    
      def index
        @reviews = Review.where(donut_id: params[:donut_id])
        render :index
      end
    
      def update
        @review = Review.find_by(id: params[:id])
        # debugger
        if @review && @review.update(review_params)
          render :show
        else
          render json: {errors: @review.errors.full_messages}, status: :uprocessable_entity
        end
      end
    
      def destroy
        @review = Review.find_by(id: params[:id])
    
        if @review.destroy
          render json: {messsage: "Review is successfully removed"}
        end
      end
    
      private
      def review_params
        params.require(:review).permit(
          :users_id,
          :donut_id,
          :title,
          :body,
          :rating
        )
      end

end
