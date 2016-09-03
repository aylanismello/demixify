# == Schema Information
#
# Table name: djs
#
#  id            :integer          not null, primary key
#  soundcloud_id :integer
#  name          :string
#  avatar_url    :string
#  location      :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Dj < ApplicationRecord
	validates :soundcloud_id, :name, :avatar_url, :location, presence: true

	def generate_fake_location
		self.location = "#{Faker::Address.city}, #{Faker::Address.country}"
	end

end
