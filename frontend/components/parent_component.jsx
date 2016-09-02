import React from 'react';
import NavBar from './nav_bar';
import Splash from './splash';
import Modal from 'react-modal';
import MixIndex from './mix_index';
import SessionFormContainer from './session_form_container';
import FirstSoundPlayer from './players/first';


class ParentComponent extends React.Component {

	constructor(props) {
		super(props);
		// debugger;
		this.renderSplash = this.renderSplash.bind(this);


		// add modal state
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
			 console.log(`opened signup modal, is set to ${this.state.modal} and ${this.state.formType}`);
		 },

		 openLoginModal: () => {
			 $('.splash').css('z-index', -2);
			 this.setState({modal: true, formType: "login"});
			 console.log(`opened login modal, is set to ${this.state.modal} and ${this.state.formType}`);

		 }

		 };

		 this.renderSplash = this.renderSplash.bind(this);

	 }

	renderSplash() {
		if (this.props.location.pathname === '/'){
			return(
			<div>
				<Splash openSignupModal={this.modalFunctions.openSignupModal}/>;
					<MixIndex/>
			</div>
		);
		}
	}


	render() {
		// debugger;
		return (
			<div>
				<NavBar modalFunctions={this.modalFunctions}/>

				{this.renderSplash()}

				<Modal className="modal-container" isOpen={this.state.modal} onRequestClose={this.modalFunctions.closeModal}>
					<SessionFormContainer formType={this.state.formType} modal={this.state.modalFunctions}/>
				</Modal>

				{this.props.children}

				<FirstSoundPlayer/>
			</div>
		);
	}
}
export default ParentComponent;
