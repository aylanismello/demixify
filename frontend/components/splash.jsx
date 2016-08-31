import React from 'react';

const Splash = () => (
	<div>
		{/* <img className="splash" src="http://images.8tracks.com/cover/i/010/226/048/M49365008MM-531.jpg?rect=0,0,500,500&q=98&fm=jpg&fit=max&w=320&h=320"/> */}
		<div className="splash">



			<div className="splash-text">
					<h1 className="splash-logo"> Demixified </h1>

					<div className="sub-text">
						<h2 className="splash-summary"> Demixified is where music fans deconstruct
							the latest DJ mixes
					</h2>
							<br/>
						<p className="splash-description"> 	Everyday thousands of DJs release their mixes online.
							Listen to these mixes for free! Our users
							deconstruct these into demixes.  </p>
					</div>
				</div>
		</div>

		<video className="splash-video" width="480">
			<source src="https://archive.org/download/WebmVp8Vorbis/webmvp8_512kb.mp4" type="video/mp4"/>
		</video>

	</div>
);

export default Splash;
