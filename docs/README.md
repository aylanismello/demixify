# Demixify

[Herkou Link](http://demixify.herokuapp.com)

## Minimum Viable Product

Demixify

- [x] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [ ] Home feed of mixes
- [ ] Comments
- [ ] Search mixes/tracks (explore mode)
- [ ] `Like` feature / profile to view liked mixes/tracks



## Design Docs
* [View Wireframes](wireframes/)
* [React Components](component-hierarchy.md)
* [API endpoints](api-endpoints.md)
* [DB Schema](schema.md)
* [Redux Structure](redux-structure.md)
* [Sample State](sample-state.md)

## Implementation Timeline

### Phase 1: Backend setup/Front End User Authentication (2 days)
**Objective:** Functioning rails project w/ front-end auth - (7 days left)
- [x] User model and migration
- [x] Back end authentication
- [x] StaticPages controller and root view
- [x] Webpack, react, redux modules
- [x] APIUtil to interact with API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Seed users, mixes, DJs


### Phase 2: Get Soundcloud API prepared, get search found SD working (1 day)
**Objective** Ensure all soundcloud API calls needed for the model are fully functional. The app relies on searching from soundcloud, make sure that
works too - (6 days left)
- [ ] Start writing boiler plater code for future general API
- [ ] devise fastest way to consolidate queries to external API
- [ ] Get streaming audio working
- [ ] Make sure we can use the soundcloud api to search for things
with some type of autocomplete


### Phase 3: Mixes Model, API, components (3 days)
**Objective:** Mixes can be created, edited, and destroyed through API (3 days left)
- [ ] Make Mix model
- [ ] Develop association between mixes and tracks
- [ ] Seed database with appropriate amount of data
- [ ] CRUD API for mixes (`MixesController`)
- [ ] JBuilder views for mixes
 * Mix components + redux loops
  - [ ] `MixesIndex`
  - [ ] `MixIndexItem`
  - [ ] `MixForm`

### Phase 4: Comments functionality to mixes #show (1 day)
**Objective** Make it so that comments can be added to mixes. This is done
through an API. Comments can only be added, not edited or deleted. (2 days left)
- [ ] create comments model
- [ ] develop necessary associations
- [ ] seed db
- [ ] minimalist create/read API for comments
- [ ] JBuilder views for comments
 * Comment components + redux loops
  - [ ] `CommentsIndex`
	- [ ] `CommentIndexItem`
	- [ ] `CommentForm`

### Phase 5: Tags + Search (2 days)
**Objective** Up till now we've has no real search. Now mixes
can be tagged with multiple tags, and tags will be searchable along with
djs, track names, and artist names.  (0 days left)
- [ ] create tags/taggings model and associations (join table)
- [ ] seed db with tags
- [ ] make necessary crud API
- [ ] set up fetching tags for mixes
- [ ] Connect this tag search with MixesIndex component
 where our filter is tags

### Bonus Features
- [ ] Facebook login
- [ ] Change mix image
- [ ] Follow djs
- [ ] Synchronization between tracks and mixes (requires timestamps)
- [ ] Pagination (infinite scroll)
- [ ] Listen map (show where people listened to mix around the world on map)
