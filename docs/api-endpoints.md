# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users
- `POST /api/users` #create

### Session
- `POST /api/session` #create
- `DELETE /api/session` #destroy

### Mixes
- `GET /api/mixes` #index
- `GET /api/mixes/:tag_name` #index, by tag_name
- `GET /api/mixes/:user_id` #index, by user_id
- `POST /api/mixes` #create
- `GET /api/mixes/:id` #show
- `PATCH /api/mixes/:id` #update
- `DELETE /api/mixes/:id` #destroy

### Tracks
- `POST /api/tracks` #create
- `GET /api/tracks/:mix_id` #index -> all tracks for a mix
- `GET /api/tracks/:id` #show

### Comments
- `GET /api/comments` #create
- `GET /api/comments/:mix_id` #index -> all comments for a mix
- `GET /api/comments/:id` #show

### Likes
- `POST /api/mixes/:mix_id/likes` #create
- `GET /api/likes/:mix_id` #index -> all likes for a mix
- `GET /api/likes/:id` #show


### Faves
- `POST /api/mixes/:track_id/faves` #create
- `GET /api/faves/:track_id` #index -> all faves for a track
- `GET /api/faves/:id` #show

### Tags
- `GET /api/tags/:mix_id` #index -> all tags for a mix
- `POST /api/mixes/:mix_id/tags` #create -> add tag to mix by name
	- tag will be created if doesn't yet exist
- `DELETE /api/mixes/:mix_id/tags/:tag_name` #delete
