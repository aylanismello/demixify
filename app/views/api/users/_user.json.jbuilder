json.extract! user, :id, :email, :username, :img_url
json.likedMixes user.liked_mixes.map {|mix| mix.id}
