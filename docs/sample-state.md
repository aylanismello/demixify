```json
{
  currentUser: {
    id: 1,
		username: "aylan mello"
    email: "hi@aylan.io",
    img_url: "https://robohash.org/my-own-slug.png?size=50x50&set=set1"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createMix: {errors: ["must select mix from soundcloud"]}
  },
  mixes: {
    1: {
      title: "1hr mix for mixmag",
			mixer_name: "Kaytranada",
			mixer_id: 2,
      demixer_name: "hooded-youth",
			demixer_id: 5,
			play_count: 4,
      tags: {
        1: {
          id: 1
          name: "dope"
        }
      }
    }
  },
  tracks: {
    1: {
      title: "Fresh starter track",
      artist_id: 1,
      artist_name: "Sammy G",
			album: "Short Stories",
			soundcloud_link: "www.soundcloud.com/sammyg"
    }
  }
  tagFilters: [1, 7, 14] // Used to track selected Tags for filtering of mixes
}
```
//notes
TRACK:
NEED SOUNDCLOUD ID->

{
artist:  {
  avatar_url: "https://i1.sndcdn.com/avatars-000004193858-jnf2pd-large.jpg"
  id : 3699101
  kind : "user"
  last_modified : "2011/06/13 23:58:44 +0000"
  permalink : "alex-stevenson"
  permalink_url : "http://soundcloud.com/alex-stevenson"
  uri : "https://api.soundcloud.com/users/3699101"
  username : "Alex Stevenson"

}

 artwork_url: null,
 permalink_url: "http://soundcloud.com/alex-stevenson/munching-at-tiannas-house,
 stream_url:
 title: "Munching at Tiannas house", x
 year x

}
