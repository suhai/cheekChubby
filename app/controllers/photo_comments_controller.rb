class PhotoCommentsController < ApplicationController
  # def create
  #   @photo = Photo.find(params[:photo_id])
  #   @comment = @photo.photo_comments.create(photo_comment_params)

  #   flash[:notice] = 'Photo Comment Added'
  #   redirect_to photo_path(@photo)
  # end

  # private
  # def photo_comment_params
  #   params.require(:photo_comment).permit(:user_id, :body, :photo_id, :photo)
  # end
end
