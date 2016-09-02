class AddUnknownAndTrackNumberToTrack < ActiveRecord::Migration[5.0]
  def change
    add_column :tracks, :unknown, :boolean, null: false
    add_column :tracks, :track_number, :integer, null: false
  end
end
