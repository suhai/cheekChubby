class HomeController < ApplicationController
  def page
  end

  def index
    @categories = Category.all
  end
end
