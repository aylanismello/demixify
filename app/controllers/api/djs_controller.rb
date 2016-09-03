class Api::DjsController < ApplicationController


  def create

    # byebug

    dj_params = params[:dj]
    # <ActionController::Parameters
    # {"soundcloud_id"=>"140493193",
    #   "avatar_url"=>"https://i1.sndcdn.com/avatars-000154398552-evw9xb-large.jpg",
    #   "name"=>"ABSENCE"} permitted: false>
    #


    @dj = Dj.new(soundcloud_id: dj_params[:soundcloud_id], name: dj_params[:name],
      avatar_url: dj_params[:avatar_url])
    # byebug

    @dj.generate_fake_location

    if @dj.save
      byebug
      render "api/djs/show"

    else
      # fail
      render json: @dj.errors.full_messages, status: 402

    end


  end


end
