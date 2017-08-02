Rails.application.routes.draw do

  # get 'sessions/new'

  get 'upload' => 'photos#new', :as => :upload
  # resources :categories
  resources :photo_comments, only: [:show, :create, :destroy]
  resources :photos, only: [:new, :create, :update]
  resources :post_comments, only: [:show, :create, :destroy]
  resources :posts, only: [:new, :create]
  resources :sessions, only: [:new, :create, :destroy]
  resources :users

  resources :posts do
    resources :post_comments
  end

  resources :photos do
    resources :photo_comments
  end

  namespace :admin do
    resources :categories
    resources :photo_comments
    resources :photos
    resources :post_comments
    resources :posts
    resources :sessions, except: [:index, :edit]
    resources :users
  end

  namespace :admin do
    get 'sessions/create'
    get "login" => "sessions#new", :as => "login"
    get "logout" => "sessions#destroy", :as => "logout"
  end

  # namespace :admin do
  #   get "login" => "sessions#new", :as => "login"
  # end

  # namespace :admin do
  #   get 'sessions/create'
  # end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#page'
end
