Rails.application.routes.draw do


  namespace :api do
    get 'comments/index'
  end

  namespace :api do
    get 'comments/create'
  end

  namespace :api do
    get 'comments/destroy'
  end

  namespace :api, defaults: {format: 'json'}  do
    resources :users, only: [:create]
    resources :tracks, only: [:create, :show]
    resources :mixes, only: [:create, :index, :show]
    resources :djs, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :comments, only: [:index, :create, :destroy]
    resources :likes, only: [:create, :destroy]

  end

  root to: 'static_pages#root'
end
