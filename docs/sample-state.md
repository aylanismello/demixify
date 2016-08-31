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
