class Admin::PostCommentsController < ApplicationController
  before_filter :verify_logged_in
  
  def destroy
  end
end
