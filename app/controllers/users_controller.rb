class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:notice] = "Oh heyy #{@user.username}! You may now Log In"
      redirect_to new_session_path
      # redirect_to photos_path
    else    
      flash.now.alert = 'Invalid or Imcomplete Entry'
      # redirect_to root_path
      render 'new'
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end