"use strict";
import React from "react";
import { Link } from "react-router";
import bootStrap from 'bootstrap';

module.exports = React.createClass({
	render: function() {
		return (<nav className="navbar navbar-default">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <Link to="/" className="navbar-brand"><img src="public/images/spa_logo.png" alt="Go to Home page" /></Link>
                                </div>

                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav">
                                        <li className="active"><Link to="home">Home <span className="sr-only">(current)</span></Link></li>
                                        <li><a href="#">Services</a></li>
                                        <li><Link to="about">About</Link></li>
                                    </ul>
                                    <form className="navbar-form navbar-left" role="search">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Search" />
                                        </div>
                                        <button type="submit" className="btn btn-default">Submit</button>
                                    </form>
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><a href="#myModal" role="button" data-toggle="modal"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                                        <li><Link to="registration"><span className="glyphicon glyphicon-registration-mark"></span> Register</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>);
	}
});