require 'test_helper'

class Api::DjsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_djs_create_url
    assert_response :success
  end

end
