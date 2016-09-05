import React from 'react';

const MixIndexItem = ({mix}) => {

	return(
		<div className="mix-index-item">
			<div className="mix-item-creator">
				{mix.user_id}
			</div>

			<div className="mix-item-detail cf">
				<div className="mix-avatar-wrapper">
					<div className="mix-avatar">
						<img src={mix.artist_avatar}/>
					</div>
				</div>

				<div className="mix-text">
					<h2 classname="mix-item-title"> {mix.title} </h2>

					<div> <h2> Mixed by </h2> </div>
					{mix.artist_username}
				</div>
			</div>

		</div>
	);
};

export default MixIndexItem;
