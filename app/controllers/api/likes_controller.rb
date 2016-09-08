class Api::LikesController < ApplicationController

	def create

		mix_id = likes_params[:mix_id]

		mix_id = mix_id.to_i if mix_id

		like = Like.new(
			user_id: current_user.id,
			mix_id: likes_params[:mix_id]
		)


		byebug

		if like.save
			render json: {
				userId: current_user.id,
				mixId: likes_params[:mix_id]
			}, status: 200
		else
			@errors = like.errors.full_messages
			render json: @errors, status: 422
		end

	end

	def destroy
		like = Like.find_by(
			user_id: current_user.id,
			mix_id: likes_params[:mix_id]
		)

		if like.destroy
			render json: {
				userId: current_user.id,
				benchId: likes_params[:mix_id]
			}
		else
			@errors = like.errors.full_messages
			render json: @errors, status: 422
		end

	end



	private
	def likes_params
		params.require(:like).permit(:mix_id)
	end
end
