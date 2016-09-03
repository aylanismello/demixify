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

require 'test_helper'

class DjTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
