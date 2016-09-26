import React from 'react';
import CommentFormContainer from '../comment_form/comment_form_container';
import CommentIndex from '../comment_index/comment_index';
import CommentIndexContainer from '../comment_index/comment_index_container';
import LikeContainer from '../like/like_container';
import TrackIndex from '../track_index/track_index';


class MixShow extends React.Component {
	constructor(props) {

		super(props);


		this.getStyles = this.getStyles.bind(this);
		this.updateComment = this.updateComment.bind(this);
		// this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
		this.theTracklist = this.theTracklist.bind(this);

		this.redirectedFromIndex = (Object.keys(this.props.mix.mixes).length === 0) ? false : true;
		// this.redirectedFromIndex = this.props

		this.state = {
			comment: ""
		};
	}


	updateComment(){
		return e => {
			this.setState({comment: e.currentTarget.value});
		};
	}

	componentDidMount() {
		// if (this.props.mix.mixId === )
		if(!this.redirectedFromIndex) {
			this.props.setCurrentMixId(this.props.mixId);
			this.props.setPlayerState(true);
		}
		
	}


	getStyles(artworkUrl) {
		return {
			backgroundImage: `url(${artworkUrl})`,
			backgroundSize: `100%`
		};
	}


	theTracklist() {
		return (
			<div>
			</div>
		);
	}


	render() {

		let loaded = (Object.keys(this.props.mix.mixes).length === 0) ? false : true;


		if (loaded){
			const mix = this.props.mix;

			let mixObj = mix.mixes[this.props.mixId];
			let mixStyles = this.getStyles(mixObj.mix.artwork_url);
			let trackCount = mixObj.tracks.length;
			let likeCount = mixObj.mix.liked_users.length;
			let currentTracks = mixObj.tracks;
			// debugger;


			return (
			<div className="mix-show-container">
				<div className="mix-description-container" style={mixStyles}>

				<div className="mix-pic">
					<img src={mixObj.mix.artwork_url}/>
				</div>

				<div className="mix-right">
						<div className="top-mix-details">
							<div className="mix-title">
								<h1>{mixObj.mix.title}</h1>
							</div>

							<div className="mix-details">
								{trackCount} tracks | {likeCount} likes
							</div>

						</div>

						<div className="bottom-mix-details">

							<LikeContainer/>

						</div>
				</div>

				</div>

				<div className="tracklist-container">

					<div className="mix-item-creator">
						<div className="mix-item-creator-pic">
							<img src={mixObj.mix.user_img}/>
						</div>

						<div className="mix-item-create-text">
							DEMIXIFIED BY: {mixObj.mix.username}
						</div>

					</div>

					<div className="tracklist-description">

					<h3> Tracklist Notes </h3>
					<br/>
						<p className="description-text">
							{mixObj.mix.description}

						</p>


						<TrackIndex tracks={currentTracks}/>


					</div>




				</div>


					<CommentFormContainer mixId={this.props.mixId}/>

					<CommentIndexContainer
						className="comments-container"
						mixId={this.props.mixId}/>


				</div>
		);
		}//IF
		else {
			return(
				<div>
				</div>
			);
		}
	}
}

export default MixShow;
