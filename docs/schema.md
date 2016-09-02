# Schema Information

## users
* has_many mixes, comments, likes, faves

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
username        | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique


## djs (is created upon mix of theirs being added for the first time)
* has_many mixes, tracks

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
soundcloud_id   | integer   | //referencing soundcloud api
name            | string    | // reference soundcloud api
avatar_url      | string    | //pulled form soundcloud api

MAYBE
location        | string    | //pulled from soundcloud api


## mixes
* belong_to user, dj; has_many tracks, likes; has_many tags through taggings

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
description     | string    |


user_id					| integer   | not null, foreign key, indexed
play_count      | integer   | not null
dj_id           | integer   | not null, foreign key, indexed



soundcloud_id   | integer   | not null //referencing soundcloud api
title           | string    | not null, indexed
year            | integer   | not null
permalink_url   | string    | not null //link to soundcloud page where
artwork_url     | string    | not null
artist_id       | string    | not null
artist_username | string    | not null
artist_avatar   | string    | not null


## track
* belongs_to mix, has_many faves


column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
mix_id          | integer   | not null, foreign key, indexed
track_number    | integer   | not null
unknown         | boolean   | not null

soundcloud_id   | integer   | not null //referencing soundcloud api
title           | string    | not null, indexed
year            | integer   |
permalink_url   | string    | not null  //also link. converts to stream_url
artwork_url     | string    | not null
artist_id       | integer   | not null
artist_username | string    | not null
artist_avatar   | string    | not null





## comments
* belongs_to mix, belongs_to user

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
mix_id          | integer   | not null, foreign key, indexed
author_id       | integer   | not null, foreign key (references users), indexed
body	          | string    | not null

## likes
* belongs_to mix, belongs_to user

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
liker_id        | integer   | not null, foreign key (references users), indexed
mix_id          | integer   | not null, foreign key, indexed

## faves
* belongs_to track, belongs_to user

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
liker_id        | integer   | not null, foreign key (references users), indexed
track_id        | integer   | not null, foreign key, indexed

## tags
* has_many taggings

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
* belongs_to mix, belongs_to tag

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
mix_id      | integer   | not null, foreign key (references mixes), indexed, unique
tag_id      | integer   | not null, foreign key (references tags), indexed
