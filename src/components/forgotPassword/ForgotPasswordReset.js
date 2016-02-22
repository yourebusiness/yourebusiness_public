import React from 'react';

export default React.createClass({
	getInitialState: function() {
		return {
			message: ""
		}
	},
	render: function() {
		return (<div>
			{this.state.message}
			</div>
		);
	}
});