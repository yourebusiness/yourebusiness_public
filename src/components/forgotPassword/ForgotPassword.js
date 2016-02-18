'use strict';
import React from 'react';
import ForgotPasswordActionCreator from '../../actions/ForgotPasswordActionCreator';
import ForgotPasswordStore from '../../stores/ForgotPasswordStore';
import Alert from '../Alert';

function getStatus() {
	return ForgotPasswordStore.getStatus()
}

export default React.createClass({
	getInitialState: function() {
		return {
			status: {},
			displayAlert: false
		}
	},
	componentDidMount: function() {
        ForgotPasswordStore.addChangeListener(this._onErrorEvent);
        this.refs.email.focus();
    },
    // it is always a good idea to remove listener when unmounting. It actually causes error
    componentWillUnmount: function() {
        ForgotPasswordStore.removeChangeListener(this._onErrorEvent);
    },
    _onErrorEvent: function() {
    	//getStatus() returns object; no var holder
    	this.state.displayAlert = true;
        this.setState({status: getStatus()});
    },
	_onClick: function() {
		this.state.status = {};
		this.state.displayAlert = false;
		let email = this.refs.email.value.trim();

		if (email.length < 6) {
			this.state.message = "Please enter valid email address.";
            this.state.displayAlert = true;
        }

        if (this.state.displayAlert)
        	this.forceUpdate();
        else
        	ForgotPasswordActionCreator.onSubmit(email);
	},
	render: function() {
		let renderAlert = null;
		if (this.state.displayAlert)
			renderAlert = (<Alert message={this.state.status.statusDesc} alertType="danger" />);

		return (<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<h4 className="page_title">Forgot Password</h4>
						{renderAlert}
		            	<p>Enter your email.</p>
		            	<input ref="email" type="text" className="form-control" placeholder="Enter email address" />
		            	<button type="button" className="btn btn-primary" onClick={this._onClick}>Send</button>
					</div>
					<div className="col-sm-4">						
					</div>
					<div className="col-sm-4" />
				</div>
			</div>);
	}
});