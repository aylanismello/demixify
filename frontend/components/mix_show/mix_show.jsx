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

		this.state = {
			comment: ""
		};
	}


	updateComment(){
		return e => {
			this.setState({comment: e.currentTarget.value});
		};
	}

	componentWillReceiveProps() {
		console.log('i am receiving new props!');
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
		let mixObj = this.props.currentMix;
		let mixStyles = this.getStyles(mixObj.mix.artwork_url);

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
								{this.props.trackCount} tracks | {this.props.likeCount} likes
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


						<TrackIndex tracks={this.props.currentTracks}/>


					</div>




				</div>


					<CommentFormContainer mixId={this.props.params['mixId']}/>

					{/* <CommentIndex className="comments-container" comments={this.props.currentMix.comments}/> */}
					<CommentIndexContainer className="comments-container" mixId={this.props.params['mixId']}/>


				</div>
		);
	}
}

export default MixShow;
