Rails.application.routes.draw do

  resources :categories, only: [:show, :index]
  resources :photo_comments, only: [:show, :create]
  resources :photos, only: [:show]
  resources :post_comments, only: [:show, :create]
  resources :posts, only: [:index, :show]

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
    resources :sessions
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
