import React from 'react';
import { Link } from 'react-router';
import MixIndex from './mix_index';

const Splash = () => (
	<div className="splash-mother">

		<div className="splash-wrapper">
				<video src="http://res.cloudinary.com/dfkrjl3pb/video/upload/v1472688101/dj_vid_e5p5vj.mp4"
				 className="splash-video"  muted loop>
				</video>

			<div className="splash" >

				<div className="splash-text">
						<h1 className="splash-logo"> Demixified </h1>

						<div className="sub-text">
							<h2 className="splash-summary"> Demixified is where music fans deconstruct
								the latest DJ mixes
						</h2>
								<br/>
								<span className="splash-description">
									<p > 	Everyday thousands of DJs release their mixes online.
									Listen to these mixes for free! Our users
									deconstruct these into demixes.  </p>
								</span>
						</div>
							<div className="signup-button">
								<Link to="/signup">Sign Up</Link>
							</div>
					</div>


			</div>
			<MixIndex/>




		</div>


	</div>
);

export default Splash;
