class Api::TracksController < ApplicationController
  def create

    # receive JSON object here from soundcloud
    # @track = Track.new(track_params)
    new_track_params = track_params
    artist = params[:track][:artist]

    # track[:artwork_url] = artist[:artwork_url]
    new_track_params[:artist_id] = artist[:id]
    new_track_params[:artist_username] = artist[:username]
    new_track_params[:artist_avatar] = artist[:avatar_url]

    new_track_params[:mix_id] = 1 #just for now until we get mix model down

    @track = Track.new(new_track_params)

    if @track.save

      render "api/tracks/show"
      #do shit with track?
    else
      render json: @track.errors.full_messages, status: 402
    end

    # byebug

  end

  def show
  end

  private
  def track_params
    params.require(:track).permit(:title, :artwork_url, :permalink_url, :year, :soundcloud_id)
  end

end
