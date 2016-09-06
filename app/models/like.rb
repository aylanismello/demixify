# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  user_id    :string
#  mix_id     :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord

	validates :user_id, :mix_id, presence: true
	validates :mix_id, uniqueness: { scope: :user_id }

	belongs_to :user
	belongs_to :mix, class_name: "Mix"

end
