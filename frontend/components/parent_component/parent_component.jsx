import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Splash from '../splash/splash';
import SplashContainer from '../splash/splash_container';
import Modal from 'react-modal';
import MixIndex from '../mix_index/mix_index';
import MixIndexContainer from '../mix_index/mix_index_container';
import SessionFormContainer from '../session_form/session_form_container';
import SoundPlayerContainer from '../sound_player/sound_player_container';


class ParentComponent extends React.Component {

	constructor(props) {
		super(props);
		this.renderSplash = this.renderSplash.bind(this);
		this.state = {
			modal: false,
			formType: "signup"
		};

		this.modalFunctions = {
		 getModalState: () => this.state,

		 closeModal: () => {
			 this.setState({modal: false});
			 $('.splash').css('z-index', 1);
			 console.log(`CLOSED modal, is set to ${this.state.modal}`);

		 },

		 openSignupModal: () => {
			 $('.splash').css('z-index', -2);
			 this.setState({modal: true, formType: "signup"});
			 console.log(`opened signup modal,
				 is set to ${this.state.modal} and ${this.state.formType}`);
		 },

		 openLoginModal: () => {
			 $('.splash').css('z-index', -2);
			 this.setState({modal: true, formType: "login"});
			 console.log(`opened login modal,
				 is set to ${this.state.modal} and ${this.state.formType}`);

		 }

		 };

		 this.renderSplash = this.renderSplash.bind(this);

	 }

	renderSplash() {
		if (this.props.location.pathname === '/'){
			return(
			<div>
				<SplashContainer openSignupModal={this.modalFunctions.openSignupModal}/>
					{/* <MixIndex/> */}
			</div>
		);
		}
	}


	render() {
		// debugger;
		return (
			<div>
				<NavBarContainer modalFunctions={this.modalFunctions}/>

				{this.renderSplash()}

				<Modal className="modal-container" isOpen={this.state.modal}
					onRequestClose={this.modalFunctions.closeModal}>
					<SessionFormContainer formType={this.state.formType}
						modal={this.state.modalFunctions}/>
				</Modal>

				<MixIndexContainer/>
				{this.props.children}

				{/* <FirstSoundPlayer/> */}
				<SoundPlayerContainer/>
			</div>
		);
	}
}
export default ParentComponent;
