class Api::CommentsController < ApplicationController
  def index

    @comments = Comment.all.select {|comment| comment.mix_id == params[:mix_id].to_i}
    # byebug

    # even if comments is empty!
    if @comments
      render "api/comments/index"
    else
      render json: @comments.errors.full_messages, status: 422
    end


  end

  def create

    # byebug
    @comment = Comment.new(user_id: current_user.id,
      mix_id: params[:mix_id], body: params[:body])



    if @comment.save
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end


  end

  def destroy
  end
end
