class CategoriesController < ApplicationController
  # def new
  #   @category = Category.new
  # end

  # def create
  #   @category = Category.new(category_params)
  #   if @category.save
  #     flash[:notice] = "Category Created"
  #     # redirect_to root_path
  #   else
  #     render 'new'
  #   end
  # end

  # def edit
  #   @category = Category.find(params[:id])
  #   @categories = Category.all
  #   @category_posts = @category.category_posts
  #   @photos = @category.category_photos
  # end

  # def update
  #   @category = Category.find(params[:id])
  #   if @category.update(category_params)
  #     flash[:notice] = "Category Updated"
  #     redirect_to category_path(params[:id])
  #   else
  #     render 'edit'
  #   end
  # end

  def show
    @category = Category.find(params[:id])
    @categories = Category.all
    @category_posts = @category.posts
    # @photos = @category.category_photos
  end

  private
  def category_params
    params.require(:category).permit(:name)
  end
end
