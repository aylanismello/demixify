# == Schema Information
#
# Table name: tracks
#
#  id              :integer          not null, primary key
#  mix_id          :integer          not null

#  soundcloud_id   :integer          not null
#  title           :string           not null
#  year            :integer
#  permalink_url   :string           not null
#  artwork_url     :string

#  artist_id       :integer          not null
#  artist_username :string           not null
#  artist_avatar   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

# ADD MIX VALIDATION

class Track < ApplicationRecord
	validates :soundcloud_id, :title, :permalink_url, :artist_id,
		:artist_username, :mix_id, presence: :true


end
