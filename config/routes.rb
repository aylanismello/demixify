Rails.application.routes.draw do

  namespace :api, defaults: {format: 'json'}  do
    resources :users, only: [:create]
    resources :tracks, only: [:create, :show]
    resource :session, only: [:create, :destroy]

  end

  root to: 'static_pages#root'
end
