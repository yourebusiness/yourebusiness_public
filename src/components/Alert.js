import React from 'react';

export default React.createClass({
	propTypes: {
		message: React.PropTypes.string.isRequired
	},
	render: function() {
		let alert = null;

		if (this.props.message && this.props.message.trim() != "") {
			alert = (<div className="alert alert-danger" role="alert">
                        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        <strong className="sr-only">Error:</strong>
                        <strong id="message">{this.props.message}</strong>
                </div>);
		}

		return (alert);
	}
});