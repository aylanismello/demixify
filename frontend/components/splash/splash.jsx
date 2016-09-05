import React from 'react';
import { Link } from 'react-router';
import MixIndexContainer from '../mix_index/mix_index_container';


class Splash extends React.Component {

constructor(props) {

	super(props);
	this.openSignupModal = this.props.openSignupModal;
}


componentDidMount() {
	this.props.getMixes("");
}

render() {
	return(
		<div className="the-splash-container">
			<div className="splash-mother">

				<div className="splash-wrapper">
						<video src="http://res.cloudinary.com/dfkrjl3pb/video/upload/c_scale,q_80,w_800/v1473040466/kaytra_landing_1_tjsirv.mp4"
						 className="splash-video"  autoPlay muted loop>
						</video>

					<div className="splash" >

						<div className="splash-text">
								<h1 className="splash-logo"> Demixify </h1>

								<div className="sub-text">
									<h2 className="splash-summary">
									Demixify is where music fans deconstruct
										the latest DJ mixes
								</h2>
										<br/>
										<span className="splash-description">
											<p >
											Everyday thousands of DJs release their mixes online.
											Listen to these mixes for free! Our users
											deconstruct these into demixes.
											</p>
										</span>
								</div>
									<div className="signup-button" onClick={this.openSignupModal}>
										<h2 className="call-to-action"> Sign Up </h2>
									</div>
							</div>


					</div>




					<MixIndexContainer/>
				</div>

				</div>




		</div>
		);
	}
}

export default Splash;
