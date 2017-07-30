class PhotosController < ApplicationController
  def new
  	@photo = Photo.new
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      flash[:notice] = "Photo Created"
      redirect_to root_path
    else
      render 'new'
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    flash[:notice] = "Photo Removed"
    redirect_to images_path
  end

  def index
    @photos = Photo.all
    @categories = Category.all
  end

  private
  def photo_params
    params.require(:photo).permit(:image, :category_id, :image_title, :user_id, :image_description, :image_file_size, :image_content_type, :remote_image_url)
  end
end
