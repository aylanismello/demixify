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
    # track_final = {}
    # track_final = track_params.dup
    #
    # artist = params[:track][:artist]
    # track_final.artist_id = artist[:id]
    # track_final.artist_username = artist[:username]
    # track_final.artist_avatar = artist[:avatar_url]
    #
    # byebug

    @track = Track.new(track_final)

    if @track.save

      render "api/tracks/show"
      #do shit with track?
    else
      # byebug
      render json: @track.errors.full_messages, status: 402
    end

    # byebug

  end

  def show
  end

  # private
  # def track_params
  #   params.require(:track).permit(:title, :artwork_url, :permalink_url, :year,
  #     :soundcloud_id, :track_number, :unknown, :mix_id)
  # end
  #

end
