class CreateTracks < ActiveRecord::Migration[5.0]
  def change
    create_table :tracks do |t|
      t.integer :mix_id, null: false
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
