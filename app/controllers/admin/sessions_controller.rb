class Admin::SessionsController < ApplicationController
  layout 'admin/login'
  def new
  end

  def create
    user = User.authenticate(params[:username], params[:password])
    if user
      session[:user_id] = user.id 
      redirect_to admin_posts_path, :notice => 'Logged In'
    else
      flash.now.alert = 'Invalid username or password'
      render 'new'
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to admin_login_path :notice => 'Logged Out'
  end
end
