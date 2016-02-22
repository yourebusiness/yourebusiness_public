import React from 'react';
import ForgotPasswordActionCreator from '../../actions/ForgotPasswordActionCreator';
import ForgotPasswordStore from '../../stores/ForgotPasswordStore';

function getStatus() {
	return ForgotPasswordStore.getStatus();
}

export default React.createClass({
	getInitialState: function() {
		return {
			message: ""
		}
	},
	componentWillMount: function() {
		// this might not be perfect yet
		function getUrlVars() {
			var vars = {};
			var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
			
			function(m,key,value) {
				vars[key] = value;
			});

			return vars;
		}

		let hash = getUrlVars()["hash"];
		ForgotPasswordActionCreator.forgotPasswordReset(hash);
	},
	componentDidMount: function() {
		ForgotPasswordStore.addChangeListener(this._onStatusChange);
	},
	componentWillUnmount: function() {
		ForgotPasswordStore.removeChangeListener(this._onStatusChange);
	},
	_onStatusChange: function() {
		this.setState({message: getStatus()["statusDesc"]});
	},
	render: function() {
		return (<div className="container">
					<div className="row">
						<div className="col-sm-5 col-md-3 col-lg-4">
							<h4 className="page_title">Forgot Password</h4>
                        	<p>{this.state.message}</p>
						</div>
						<div className="col-sm-4 col-md-5 col-lg-4"></div>
						<div className="col-sm-3 col-md-4 col-lg-4"></div>
					</div>
				</div>);
	}
});