class Admin::SessionsController < Admin::ApplicationController
  layout 'admin/login'
  def new
  end

  def create
    login!
    # user = User.authenticate(params[:username], params[:password])
    # if user
    #   session[:user_id] = user.id 
    #   redirect_to admin_photos_path, :notice => 'Logged In'
    # else
    #   flash.now.alert = 'Invalid username or password'
    #   render 'new'
    # end
  end

  def destroy
    logout!
    # session[:user_id] = nil
    # # redirect_to admin_login_path :notice => 'Logged Out'
    # redirect_to root_path :notice => 'Logged Out'
  end
end
