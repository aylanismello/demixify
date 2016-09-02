require 'test_helper'

class Api::MixesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_mixes_create_url
    assert_response :success
  end

end
