# == Schema Information
#
# Table name: mixes
#
#  id              :integer          not null, primary key
#  description     :string
#  user_id         :integer          not null
#  dj_id           :integer          not null
#  play_count      :integer
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

require 'test_helper'

class MixTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
