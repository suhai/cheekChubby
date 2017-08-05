class Admin::ApplicationController < ActionController::Base
	before_action :getCategoryNav
	protect_from_forgery with: :exception
	layout 'admin/application'

	helper_method :login!
	helper_method :logout!
	helper_method :current_user
	helper_method :verify_logged_in
	helper_method :verify_is_admin
	helper_method :getCategoryNav


	private
	def getCategoryNav
  	@categoryNav = Category.all
	end
	
	def current_user
		@current_user ||=User.find(session[:user_id]) if session[:user_id]
	end

	def verify_logged_in
  	unless current_user
  		redirect_to admin_login_path
  	end
	end
	
	def verify_is_admin
  	unless current_user.is_admin
  		redirect_to root_path
  	end
	end	


	def login!
    user = User.authenticate(params[:username], params[:password])
    if user
      session[:user_id] = user.id 
      redirect_to admin_users_path
    else
      flash.now.alert = 'Invalid username or password'
			render 'new' 
    end
	end

  def logout!
    session[:user_id] = nil
    redirect_to root_path
  end
end
  