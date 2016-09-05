import React from 'react';
import MixIndexContainer from '../mix_index/mix_index_container';

class Explore extends React.Component {

	constructor(props) {
		super(props)

		this.mixes = [ {artist_avatar: "https://i1.sndcdn.com/avatars-000237648567-qu26ka-large.jpg",
				artist_id : 102433987,
				artist_username : "Assala",
				artwork_url : "https://i1.sndcdn.com/artworks-000111363321-b6qks1-large.jpg",
				dj_id : 102433987,
				id : 1,
				permalink_url : "https://soundcloud.com/assalaofficial/assala-aisha-ala-ely-fat",
				soundcloud_id : 197045249,
				title : "Assala - Aisha Ala Ely Fat / اصاله - عايشة علي اللي فات",
				user_id : 11,
				year : null
				}
			];
	}

	render() {
		console.log('rendering explore\n\n\n');
		return (
			<div className="explore-wrapper">


				{/* <div className="mix-index-container">
					<div className="mix-index-item">
						<div className="mix-index-creator">
						</div>
						HELLO
					</div>
				</div> */}

				<MixIndexContainer/>
			</div>
		);
	}
}

export default Explore;
