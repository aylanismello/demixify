import React from 'react';
import CommentFormContainer from '../comment_form/comment_form_container';
import CommentIndexContainer from '../comment_index/comment_index_container';

class MixShow extends React.Component {
	constructor(props) {

		super(props);
		console.log('constructor called');



		// this.currentMix = props.currentMix;

		this.currentMix = props.mix.mixes[parseInt(this.props.params['mixId'])];
		// find the mix with this mixId property of mixId

		let mixId = this.props.params['mixId'];
		let mixByParam;

		// debugger;
		props.mix.mixes.forEach(mix => {
			if (mix.mix.id === parseInt(mixId)) {
				mixByParam = mix;
			}
		});

		// debugger;

		this.currentMix = mixByParam;


		// debugger;
		this.trackCount = mixByParam.tracks.length;
		

		this.getStyles = this.getStyles.bind(this);
		this.updateComment = this.updateComment.bind(this);
		this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
		this.theTracklist = this.theTracklist.bind(this);

		this.state = {
			comment: "",
			comments: ""

		};
	}


	updateComment(){
		return e => {
			this.setState({comment: e.currentTarget.value});
		};
	}


	componentDidMount() {

		console.log('mounted');
		debugger;



		// this.props.getComments(parseInt(this.props.params['mixId']));
	}

	componentDidUpdate() {
		console.log('\n\nUPDATED\n\n');
	}

	handleCommentSubmit(e) {
		e.preventDefault();

		this.props.submitComment(this.state.comment, this.currentMix.mix.id);
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

	// theForm() {
	// 	return(
	// 		<div className="comment-form-container">
	//
	// 			<form onSubmit={this.handleCommentSubmit}
	// 				className="comment-form-box">
	//
	// 				<textarea className="comment-text"
	// 				cols="25"
	// 				rows="10"
	// 				value={this.state.comment}
	// 				onChange={this.updateComment()}
	// 				placeholder="What do you think of this demix?"/>
	//
	// 				<input type="submit" value="submit"/>
	//
	// 			</form>
	//
	//
	// 		</div>
	// 	);
	// }




	render() {
		let mixObj = this.currentMix;
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
								{this.trackCount} tracks
							</div>

						</div>

						<div className="bottom-mix-details">
							<button className="like-button">
								LIKE
							</button>
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
						<p className="description-text">
							{mixObj.mix.description}

						</p>

					</div>




				</div>


					<CommentFormContainer mixId={this.props.params['mixId']}/>
					<CommentIndexContainer className="comments-container"/>



				</div>
		);
	}
}

export default MixShow;
