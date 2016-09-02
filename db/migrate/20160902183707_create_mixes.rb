class CreateMixes < ActiveRecord::Migration[5.0]
  def change
    create_table :mixes do |t|
      t.string :description
      t.integer :user_id, null: false
      t.integer :dj_id, null: false
      t.integer :play_count
      # all those above are internal to MY api

      t.integer :soundcloud_id, null: false
      t.string :title, null: false
      t.integer :year
      t.string :permalink_url, null: false
      t.string :artwork_url
      t.integer :artist_id, null: false
      t.string :artist_username, null: false
      t.string :artist_avatar


      t.timestamps
    end
  end
end
