class Admin::PostsController < Admin::ApplicationController
  before_action :verify_logged_in
  before_action :verify_is_admin

  def index
    if params[:search]
      @posts = Post.search(params[:search]).all.order('title ASC').paginate(:per_page => 2, :page => params[:page])
    else
      @posts = Post.all.order('title ASC').paginate(:per_page => 10, :page => params[:page])
    end
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

  def edit
    @post = Post.find(params[:id])
  end

  def show
    @post = Post.find(params[:id])
    @categories = Category.all
    @post_comment = PostComment.new
    @post_comments = PostComment.all
  end

  def update
    @post = Post.find(params[:id])
    if params[:post][:image].blank?
      @post.image = nil
    end
    if @post.update(post_params)
      redirect_to admin_posts_path
    else    
      render 'new'
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    flash[:notice] = "#{@post.title} Post Removed"
    redirect_to admin_posts_path
  end

  private
  def post_params
    params.require(:post).permit(:title, :category_id, :user_id, :tags, :image, :body)
  end
end
