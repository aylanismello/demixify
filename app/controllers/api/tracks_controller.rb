class Api::TracksController < ApplicationController
  def create

    track_params = params[:track]
    track_final = {
      title: track_params[:title],
      artwork_url: track_params[:artwork_url],
      permalink_url: track_params[:permalink_url],
      year: track_params[:year],
      soundcloud_id: track_params[:soundcloud_id],
      track_number: track_params[:track_number],
      unknown: track_params[:unknown],
      mix_id: track_params[:mix_id],
      artist_id: track_params[:artist][:id],
      artist_username: track_params[:artist][:username],
      artist_avatar: track_params[:artist][:avatar_url]
    }

    @track = Track.new(track_final)

    if @track.save

      render "api/tracks/show"
      #do shit with track?
    else
      # byebug
      render json: @track.errors.full_messages, status: 422
    end

    # byebug

  end

  def show
    @tracks = Mix.find(params[:id]).tracks

    if @tracks
      render "api/tracks/show_many"
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  # private
  # def track_params
  #   params.require(:track).permit(:title, :artwork_url, :permalink_url, :year,
  #     :soundcloud_id, :track_number, :unknown, :mix_id)
  # end
  #

end
