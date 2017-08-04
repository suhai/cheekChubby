class Admin::UsersController < Admin::ApplicationController
  before_action :verify_logged_in
  before_action :verify_is_admin
  
  def index
    if params[:search]
      @users = User.search(params[:search]).all.order('username ASC').paginate(:per_page => 10, :page => params[:page])
    else
      @users = User.all.order('username ASC').paginate(:per_page => 10, :page => params[:page])
    end
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to admin_users_path
    else    
      render 'new'
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      redirect_to admin_users_path
    else    
      render 'new'
    end
  end

  def destroy
    @user = User.find(params[:id])
    
    @user.posts.each do |post|
      post.destroy
    end

    @user.destroy
    flash[:notice] = "#{@user.username} User Removed"
    redirect_to admin_users_path
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
