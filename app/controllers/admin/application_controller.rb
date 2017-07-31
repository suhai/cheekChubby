class Admin::ApplicationController < ActionController::Base
	before_action :getCategoryNav
	protect_from_forgery with: :exception
	layout 'admin/application'

	helper_method :current_user
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
			redirect_to root_path 
		end
  end
	
	def verify_is_admin_or_not_logged_in
  	unless !current_user || current_user.is_admin
  		redirect_to root_path
  	end
	end
	
end
  