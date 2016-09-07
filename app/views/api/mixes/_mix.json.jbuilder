json.mix do

  json.extract! mix, :id, :soundcloud_id, :user_id, :dj_id, :title, :year, :permalink_url,
   :artwork_url, :artist_id, :artist_username, :artist_avatar, :description

  json.user_img mix.user.img_url
  json.username mix.user.username

end

json.tracks do
  json.array! mix.tracks
end



json.comments do
  json.array! mix.comments do |comment|
    json.extract! comment, :body, :user_id, :mix_id, :created_at, :updated_at
    json.user_img comment.user.img_url
    json.username comment.user.username
  end
end
