require 'test_helper'

class Api::TracksControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_tracks_create_url
    assert_response :success
  end

  test "should get show" do
    get api_tracks_show_url
    assert_response :success
  end

end