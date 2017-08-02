class ApplicationController < ActionController::Base
  before_action :getCategoryNav
  protect_from_forgery with: :exception
  helper_method :current_user

  helper_method :login!
	helper_method :logout!

  private
  def current_user
		@current_user ||=User.find(session[:user_id]) if session[:user_id]
  end
  
  def getCategoryNav
  	@categoryNav = Category.all
  end

  def login!
    user = User.authenticate(params[:username], params[:password])
    if user
      session[:user_id] = user.id 
      redirect_to photos_path, :notice => 'Logged In'
    else
      flash.now.alert = 'Invalid username or password'
			redirect_to new_session_path
    end
  end

  def logout!
    session[:user_id] = nil
    # redirect_to admin_login_path :notice => 'Logged Out'
    redirect_to root_path :notice => 'Logged Out'
  end
end
