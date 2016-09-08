json.extract! comment, :body, :created_at, :mix_id, :user_id
json.user_img comment.user.img_url
json.username comment.user.username
