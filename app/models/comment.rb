# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :string
#  user_id    :integer
#  mix_id     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
	validates :body, :user_id, :mix_id, presence: true

	belongs_to :mix
	belongs_to :user


end
