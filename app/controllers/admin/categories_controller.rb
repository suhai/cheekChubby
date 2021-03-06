class Admin::CategoriesController < Admin::ApplicationController
  before_action :verify_logged_in
  before_action :verify_is_admin

  def index
    if params[:search]
      @categories = Category.search(params[:search]).all.order('name ASC').paginate(:per_page => 10, :page => params[:page])
    else
      @categories = Category.all.order('name ASC').paginate(:per_page => 10, :page => params[:page])
    end
  end

  def show
    @category = Category.find(params[:id])
    @categories = Category.all
    @photos = @category.photos
  end

  def new
    @category = Category.new
  end

  def create
    @category = Category.new(category_params)
    if @category.save
      redirect_to admin_categories_path
    else    
      render 'new'
    end
  end


  def edit
    @category = Category.find(params[:id])
    @categories = Category.all
    @photoss = @category.photos
  end

  def update
    @category = Category.find(params[:id])
    if @category.update(category_params)
      redirect_to admin_categories_path
    else    
      render 'edit'
    end
  end

  def destroy
    @category = Category.find(params[:id])
    @category.destroy
    flash[:notice] = "#{@category.name} Category Removed"
    redirect_to admin_categories_path
  end

  private
  def category_params
    params.require(:category).permit(:name)
  end
end
