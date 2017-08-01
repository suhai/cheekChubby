Rails.application.routes.draw do

  get 'upload' => 'photos#new', :as => :upload
  resources :categories
  resources :photo_comments, only: [:show, :create, :destroy]
  resources :photos
  resources :post_comments, only: [:show, :create, :destroy]
  resources :posts
  resources :users, only: [:new]

  resources :posts do
    resources :post_comments
  end

  resources :photos do
    resources :photos_comments
  end

  namespace :admin do
    resources :categories
    resources :photo_comments
    resources :photos
    resources :post_comments
    resources :posts
    resources :sessions, only: [:new, :create, :destroy]
    resources :users
  end

  namespace :admin do
    get "logout" => "sessions#destroy", :as => "logout"
  end

  namespace :admin do
    get "login" => "sessions#new", :as => "login"
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#page'
end
