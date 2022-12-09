class Api::CartItemsController < ApplicationController

    def create
        # debugger
        @cart_item = CartItem.find_by(id: params[:id])
        if @cart_item 
            @cart_item[:quantity] += 1
            @cart_item.save
            render :show
        else 
            @cart_item = CartItem.new(cart_item_params) 
            debugger
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
        @cart_item = CartItem.find_by(id: params[:id]);

        if @cart_item[:quantity] == 0
            @cart_item.destroy
            render :show

        elsif @cart_item.update(cart_item_params)
            render :show
        else 
            #render 'api/errors'
        end

    end

    def index
        # debugger
        @cart_items = CartItem.all
        render :index
    end

    def destroy
        @cart_item = CartItem.find_by(id: params[:id]);
        if @cart_item.destroy
            @cart_items = CartItem.all
            render :index #I know we can't render index but it doesn't seem like we should be rendering show for a cart item we just deleted either
        end
    end

    private

    def cart_item_params
        params.require(:cart_item).permit(:donut_id, :quantity, :donut_price, :donut_name)
    end
end
