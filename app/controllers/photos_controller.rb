class PhotosController < ApplicationController
  def index
    if params[:search]
      @photos = Photo.search(params[:search]).all.order('image_title ASC').paginate(:per_page => 10, :page => params[:page])
    else
      @photos = Photo.all.order('image_title ASC').paginate(:per_page => 10, :page => params[:page])
    end
    @categories = Category.all
  end
  
  def new
  	@photo = Photo.new
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      redirect_to photos_path
    else
      render 'new'
    end
  end

   def update
    @photo = Photo.find(params[:id])
    if params[:photo][:image].blank?
      @photo.image = nil
    end
    if @photo.update(photo_params)
      redirect_to admin_photos_path
    else    
      render 'edit'
    end
  end

  # def destroy
  #   @photo = Photo.find(params[:id])
  #   @photo.destroy
  #   flash[:notice] = "Photo Removed"
  #   redirect_to photos_path
  # end


  private
  def photo_params
    params.require(:photo).permit(:image, :category_id, :image_title, :user_id, :image_description, :image_file_size, :image_content_type, :remote_image_url)
  end
end
