class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.generate_faker_data

    if @user.save
      # @user.generate_faker_data
      # @user.save
      sign_in(@user)
      render "api/users/show"
    else
      # byebug
      render json: @user.errors.full_messages, status: 422
    end

  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
