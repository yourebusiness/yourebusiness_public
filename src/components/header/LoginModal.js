'use strict'
let React = window.React = require('react');

module.exports = React.createClass({
	render: function() {
		return (<div className="modal fade" id="myModal">
		        <div className="modal-dialog">
		            <div className="modal-content">
		                <div className="modal-header">
		                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
		                    </button>
		                    <div className="modal-title">
		                        <h4>Log-in</h4>
		                    </div>
		                    <div className="modal-subtitle"><small>Enter your username and password</small></div>
		                </div>
		                <div className="modal-body">
		                    <form method="post" action="#" className="form-horizontal">
		                        <div className="form-group">
		                             <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
		                             <div className="col-sm-8">
		                                <input type="email" className="form-control" id="email" name="username" placeholder="You email here" />
		                             </div>
		                             <div col="className-sm-2"></div>
		                        </div>
		                        <div className="form-group">
		                            <label htmlFor="inputPassword" className="col-sm-2 control-label">Password</label>
		                            <div className="col-sm-8">
		                                <input type="password" id="password" name="password" className="form-control" placeholder="Input password here" />
		                            </div>
		                        </div>
		                        <div className="form-group">
		                            <div className="col-sm-offset-2 col-sm-10">
		                                <div className="checkbox">
		                                    <label><input type="checkbox" /> Remember me</label>
		                                </div>
		                            </div>
		                        </div>
		                        <div className="form-group">
		                            <div className="col-sm-offset-2 col-sm-10">
		                                <button type="submit" className="btn btn-primary">Log-in</button>
		                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
		                            </div>
		                        </div>
		                    </form>
		                </div>
		            </div>
		        </div>
    		</div>);
	}
});