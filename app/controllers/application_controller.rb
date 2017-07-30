class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  private
  def getCategoryNav
  	@categoryNav = Category.all
  end
end
