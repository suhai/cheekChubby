class PostsController < ApplicationController
  def index
    if params[:search]
      @posts = Post.search(params[:search]).order('title ASC').paginate(:per_page => 10, :page => params[:page])
    else
      @posts = Post.all.order('title ASC').paginate(:per_page => 10, :page => params[:page])
    end
    @categories = Category.all
  end

  def new
    @page_title = 'Add Post'
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if params[:post][:image].blank?
      @post.image = nil
    end
    if @post.save
      redirect_to admin_posts_path
    else    
      render 'new'
    end
  end

  def create
    @post = Post.new(post_params)
    if params[:post][:image].blank?
      @post.image = nil
    end
    if @post.save
      redirect_to posts_path
    else    
      render 'new'
    end
  end

  def show
    @post = Post.find(params[:id])
    @categories = Category.all
    @post_comment = PostComment.new
    @post_comments = PostComment.all
  end

  private
  def post_params
    params.require(:post).permit(:title, :category_id, :user_id, :tags, :image, :body)
  end
end
