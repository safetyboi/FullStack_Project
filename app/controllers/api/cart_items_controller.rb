class Api::CartItemsController < ApplicationController

    def create
        @cart_item = CartItem.find_by(donut_id: params[:donut_id])
        if @cart_item 
            @cart_item[:quantity] += 1
            @cart_item.save
            render :show
        else 
            @cart_item = CartItem.new(cart_item_params) 
            if @cart_item.save
            # debugger
            render :show
            else 
            # debugger
            # render '/api/errors'
            end
        end
    end

    def update
        @cart_item = CartItem.find_by(donut_id: params[:donut_id]);

        if @cart_item[:quantity] == 0
            @cart_item.destroy
            render :index

        elsif @cart_item.update
            render :index
        else 
            #render 'api/errors'
        end

    end

    def index
        debugger
        @cart_items = CartItem.all
        render :index
    end

    def destroy
        @cart_item = CartItem.find_by(donut_id: params[:donut_id]);
        @cart_item.destroy
        render :index 
    end

    private

    def cart_item_params
        params.require(:cart_item).permit(:donut_id, :quantity, :donut_price, :donut_name)
    end
end
