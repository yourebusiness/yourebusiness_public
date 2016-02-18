import React from 'react';
import Alert from './Alert';
import { Link } from 'react-router';

let Login = React.createClass({
    getInitialState: function() {
        return {
            displayAlert: false,
            errorMessage: ""
        }
    },
    _onSubmit: function(e) {
        e.preventDefault();
        this.state.displayAlert = false;
        this.state.errorMessage = "";

        let data = {},
        username = this.refs.username.value.trim(),
        password = this.refs.password.value.trim();

        if (userEmail.length < 6) {
            this.state.errorMessage = "Invalid Email.";
            this.state.displayAlert = true;
        }

        if (this.state.displayAlert)
            this.forceUpdate();
        else
            LoginActionCreator.onSubmit(data);
    },
    render: function() {
        return (<div className="container">
            <div className="row">
                <div className="col-md-4">
                </div>
                <div className="col-md-4">
                    <div className="panel panel-default login">
                        <div className="panel-heading">
                            <h3 className="panel-title">Login</h3>
                        </div>
                        <div className="panel-body">
                            <form method="post" action="#">
                                <div className="form-group">
                                    <label htmlFor="username">Email</label>
                                    <input type="email" className="form-control" id="username" name="username" ref="username" placeholder="Username" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                                <Link to="forgotpassword" className="pull-right">Forgot password</Link>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <Alert message={this.state.errorMessage} alertType="danger" />
                </div>
            </div>
        </div>);
    }
});

export default Login;