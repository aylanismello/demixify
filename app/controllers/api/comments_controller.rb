class Api::CommentsController < ApplicationController
  def index
  end

  def create

    # byebug
    @comment = Comment.new(user_id: current_user.id,
      mix_id: params[:mix_id], body: params[:body])



    if @comment.save
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 402
    end


  end

  def destroy
  end
end
