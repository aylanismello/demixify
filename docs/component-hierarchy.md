**NavBarContainer**
 - NavBar
  + Logo
  - SearchContainer
    * Search
      + SearchBar
      + SearchResults
  - ProfileDropdownContainer
    * ProfileDropdown
      - ProfilePicÂ
      - ProfileButton
      - AddPlaylistButton
      - LogoutButton

**StreamBarContainer**
  - StreamBar
    - TrackDetailContainer
      - TrackDetail
        - TrackTitle
        - TrackArtist
        - TrackAlbum
        - TrackLink
        - MixLikedState
        - TrackFavedState
      - PlayerContainer
        - Player
          - PlayButton
          - PauseButton
          - Volume

**MixDetailContainer**
  - MixDetail
    + MixImage
    + MixTitle
    + MixReleaseDate
    + MixTrackCount
    + MixLikeCount
    + MixTags
    + MixDJ
    + MixLiked
  - TrackInfoContainer
    - TrackInfo
      + DemixerImage
      + DemixerUsername
      + DemixNotes
        - TrackListContainer
          + Tracklist
            - TrackItemContainer
              + TrackItem
                + Number
                + Title
                + Artist
                + Album
                + Link
                + FavedState
  - CommentDetailContainer
    - CommentDetail
      + CommentFormContainer
        - CommentForm
          - FormElement
          - SubmitButton
        - CommentListContainer
          - CommentItem

**ProfilePage**
  - ProfileDetailContainer
    - ProfileDetail
      - UserImage
      - NumberMixes
      - NumberLikes
      - NumberFaves
      - Username
      - Location
      - IsDJ
      - NumberTracks
  - MixViewerContainer
    - MixViewer
      - MixBarContainer
        - MixBar
          - DemixesButton
          - MixesButton
          - LikesButton
          - FavesButton
          - TracksButton
      - MixIndexContainer

**MixIndexContainer**
  - MixIndex
    - MixIndexItemContainer
      - MixIndexItem
        + Demixer
        + MixImage
        + MixTitle
        + MixReleaseDate
        + MixTrackCount
        + MixLikeCount
        + MixTags
        + MixDJ
        + MixLiked

**SearchPageContainer**
- SearchContainer
  * Search
    + SearchBar
    + ExploreButton
  * TagListContainer
    - Taglist
      -TagListItem
  * MIxIndexContainer





 ## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/user/:mixId" | "MixesContainer" |
| "/home/tag/:tagId/mix/:mixId" | "TagContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-mix" | "NewMixContainer" |
| "/search" | "Search" |
