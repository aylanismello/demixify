import React from 'react';
import { hashHistory } from 'react-router';

class MixIndexItem extends React.Component {

	constructor(props) {
		super(props);
		this.mix = props.mix;
		this.handleShowRedirect = this.handleShowRedirect.bind(this);
	}

	handleShowRedirect() {
		// console.log('is this working');
		// debugger;
		const args = arguments;
		return e => {
			const mixId = args[0];
			this.props.getMix(mixId);
			hashHistory.push(`/mixes/${mixId}`);
		};
	}

	render() {

		return(
			<div className="mix-index-item">
				<div className="mix-item-creator">
					{this.mix.user_id}
				</div>

				<div className="mix-item-detail cf">
					<div className="mix-avatar-wrapper">
						<div className="mix-avatar">
							<img  onClick={this.handleShowRedirect(this.mix.id)}
								src={this.mix.artist_avatar}/>
						</div>
					</div>

					<div className="mix-text">
						<h2 onClick={this.handleShowRedirect(this.mix.id)}
							className="mix-item-title"> {this.mix.title} </h2>

						<div className="mix-item-dj">
									<h2> Mixed by </h2>
									<h3 className="dj-name">
										{this.mix.artist_username}
									</h3>
						</div>
					</div>
				</div>

			</div>
		);
	}

}

export default MixIndexItem;
