# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  mix_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
	validates :user_id, uniqueness: { scope: :mix_id }
	
	belongs_to :user
	belongs_to :mix
end
