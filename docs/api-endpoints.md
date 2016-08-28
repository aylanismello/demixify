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
- `GET /api/likes/:mix_id` #index -> all likes for a mix
- `GET /api/likes/:id` #show


###Faves
- `GET /api/faves/:track_id` #index -> all faves for a track
- `GET /api/likes/:id` #show

###Tags
- `GET /api/tags/:mix_id` #index -> all tags for a mix

links      GET     /links(.:format)         links#index
					 POST   /links(.:format)          links#create
	new_link GET    /links/new(.:format)      links#new
 edit_link GET    /links/:id/edit(.:format) links#edit
			link GET    /links/:id(.:format)      links#show
					 PATCH  /links/:id(.:format)      links#update
					 PUT    /links/:id(.:format)      links#update
					 DELETE /links/:id(.:format)      links#destroy





### Tags

- A note's tags will be included in the note show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/notes/:note_id/tags`: add tag to note by name
  - if note doesn't already exist, it will be created
- `DELETE /api/notes/:note_id/tags/:tag_name`: remove tag from note by
  name
