class Api::MixesController < ApplicationController


  def index
    search_string = params[:search_string]

    byebug
  end
  def create

    mix_params = params[:mix]
    artist = params[:mix][:artist]

    mix_final = {
      title: mix_params[:title],
      artwork_url: mix_params[:artwork_url],
      permalink_url: mix_params[:permalink_url],
      year: mix_params[:year],
      soundcloud_id: mix_params[:soundcloud_id],
      dj_id: mix_params[:dj_id],
      user_id: mix_params[:user_id],

      artist_id: mix_params[:artist][:id],
      artist_username: mix_params[:artist][:username],
      artist_avatar: mix_params[:artist][:avatar_url],

      play_count: 0,
      description: mix_params[:description]
    }


    @mix = Mix.new(mix_final)

    if @mix.save

      render "api/mixes/show"
      #do shit with track?
    else
      render json: @mix.errors.full_messages, status: 402
    end
  end




  private

  # def mix_params
  #   params.require(:mix).permit(:title, :artwork_url, :permalink_url, :year,
  #     :soundcloud_id, :dj_id, :user_id)
  # end
end
