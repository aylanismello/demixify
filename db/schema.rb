# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160906044014) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "djs", force: :cascade do |t|
    t.integer  "soundcloud_id"
    t.string   "name"
    t.string   "avatar_url"
    t.string   "location"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "likes", force: :cascade do |t|
    t.string   "user_id"
    t.string   "mix_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["mix_id"], name: "index_likes_on_mix_id", unique: true, using: :btree
    t.index ["user_id"], name: "index_likes_on_user_id", unique: true, using: :btree
  end

  create_table "mixes", force: :cascade do |t|
    t.string   "description"
    t.integer  "user_id",         null: false
    t.integer  "dj_id",           null: false
    t.integer  "play_count"
    t.integer  "soundcloud_id",   null: false
    t.string   "title",           null: false
    t.integer  "year"
    t.string   "permalink_url",   null: false
    t.string   "artwork_url"
    t.integer  "artist_id",       null: false
    t.string   "artist_username", null: false
    t.string   "artist_avatar"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "tracks", force: :cascade do |t|
    t.integer  "mix_id",          null: false
    t.integer  "soundcloud_id",   null: false
    t.string   "title",           null: false
    t.integer  "year"
    t.string   "permalink_url",   null: false
    t.string   "artwork_url"
    t.integer  "artist_id",       null: false
    t.string   "artist_username", null: false
    t.string   "artist_avatar"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.boolean  "unknown",         null: false
    t.integer  "track_number",    null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "username"
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "img_url",         null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
