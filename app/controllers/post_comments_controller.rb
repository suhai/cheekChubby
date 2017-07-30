class PostCommentsController < ApplicationController
  def create
    @post = Post.find(params[:post_id])
    @comment = @post.post_comments.create(post_comment_params)

    flash[:notice] = 'Comment Added'
    redirect_to post_path(@post)
  end

  private
  def post_comment_params
    params.require(:post_comment).permit(:user_id, :body, :post_id)
  end
end
