# cheekChubby

The Application is deployed here: [cheekChubby](https://cheekchubby.herokuapp.com/)

cheekChubby is a Ruby / Rails application that was designed for users to access posts / Articles on various topics of their interests. In addition there is a section for just photos / images where users can scroll through photos by category. A user has the option to just read the articles, browse images, or create their own posts and or upload images for other users to access. To create a post or upload an image to the photos section, a user would have to be signed up and logged in. Currently, a user only has Create and Read privilges, with the option to be upgraded to administrator position if they have more content to share and desires to be designated as admin.


## Features

### Post and/or Photo creation

  The main features of this application is creating posts (with attached images, else a default image is attached to the post). A wysiwyg editor is made available to help the user format their text, in addition to having the ability to uplaod images or videos with the editor. For the posts section, the paperclip gem was used for image uploads while the carrierwave gem was used to image uploads for the photos section. I experimented with persisting uploaded images to AWS database but opted to just rely on heroku's file system to temporarily store images.
  


### 

```js
class Admin::ApplicationController < ActionController::Base
	before_action :getCategoryNav
	protect_from_forgery with: :exception
	layout 'admin/application'

	helper_method :login!
	helper_method :logout!
	helper_method :current_user
	helper_method :verify_logged_in
	helper_method :verify_is_admin
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
  		redirect_to admin_login_path
  	end
	end
	
	def verify_is_admin
  	unless current_user.is_admin
  		redirect_to root_path
  	end
	end	


	def login!
    user = User.authenticate(params[:username], params[:password])
    if user
      session[:user_id] = user.id 
      redirect_to admin_users_path
    else
      flash.now.alert = 'Invalid username or password'
			render 'new' 
    end
	end

  def logout!
    session[:user_id] = nil
    redirect_to root_path
  end
end
  
```


```rb
// views/photos/index.html.erb

<div id="user_nav" class="pull-right"> 
  <% if current_user %>
    <h5>Logged In as <%= current_user.username.capitalize %></h5>
    <%= link_to 'Log Out', admin_logout_path, class:'btn btn-cancel pull-right' %>
    <% else %>
    <%= link_to 'Log In', admin_login_path, class:'btn btn-info' %>
  <% end %>
</div>

<h2 class="page-header">Manage Photos</h2>
<% if @photos.exists? %>
  <table class="table table-striped">
    <tr>
      <th>Photo Title</th>
      <th>Photo Category</th>
      <th>Date Created</th>
      <th><%= link_to "Add New Photo", new_admin_photo_path, class:'btn btn-addnew' %></th>
    </tr>

    <% @photos.each do |photo|%>
    <tr>
      <td><%= photo.image_title %></td>
      <td><%= photo.category.name %></td>
      <td><%= photo.created_at.to_time.strftime('%B %e at %l:%M %p') %></td>
      <td><%= link_to "Edit", edit_admin_photo_path(photo), class:'btn btn-primary'   %> <%= link_to "Delete", admin_photo_path(photo), class:'btn btn-danger',   method: :delete, data: {confirm: 'Are you sure?'}  %></td>
    </tr>
    <% end %>
  </table>
  <%= will_paginate @photos %>
<% else %>
  <p>Sorry, No Photo Was Found.</p>
<% end %>

```


## Homepage

![Alt text](https://res.cloudinary.com/swy/image/upload/v1501896005/cheek1_sbyiwh.png "homepage")


## Homepage Signup

![Alt text](https://res.cloudinary.com/swy/image/upload/v1501895998/cheek2_jjdhxp.png "homepage signup")


## Posts Page

![Alt text](https://res.cloudinary.com/swy/image/upload/v1501896002/cheek3_js1jsb.png "posts page")


## Photos Page

![Alt text](https://res.cloudinary.com/swy/image/upload/v1501896005/cheek4_a96nim.png "photos page")



### Plans For The Future

* I am currently working on the comments section. Once that is completed, users should be able to comment on articles / posts and or photos, with references to their credentials stored with their comments in the database. The model relationships are alrready established and this feature should be available soon.

* I also plan to configure AWS S3 buckets to store image files uploaded by users from the app, or even probably migrate the app from Heroku to AWS.



