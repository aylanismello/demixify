class Api::DjsController < ApplicationController


  def create
    dj_params = params[:dj]

    @dj = Dj.new(soundcloud_id: dj_params[:soundcloud_id], name: dj_params[:name],
      avatar_url: dj_params[:avatar_url])
    # byebug

    @dj.generate_fake_location

    if @dj.save
      render "api/djs/show"
    else
      render json: @dj.errors.full_messages, status: 402

    end


  end


end
