class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user

  private
  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def sign_in(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token! if current_user
    session[:session_token] = nil
    @current_user = nil
  end

end
