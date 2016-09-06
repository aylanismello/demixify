class Api::MixesController < ApplicationController


  def index
    search_string = params[:search_string].downcase

    # this will automatically consider all mixes  is search_string is empty
    @mixes = Mix.all.select{|mix| mix.title.downcase.include?(search_string) || mix.artist_username.downcase.include?(search_string)}


    if @mixes
      render "api/mixes/index"
    else
      render json: "Found no mixes!"
    end


  end


  def show

    @mix = Mix.find(params[:id])


    user = @mix.user
    returned_user = {username: user.username, user_img: user.img_url}

    @returned_mix = [@mix, returned_user]


    # byebug
    if @mix.save
      render "api/mixes/show"
    else
      render json: @mix.errors.full_messages, status: 402
    end



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
