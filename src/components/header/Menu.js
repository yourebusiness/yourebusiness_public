'use strict'
//let React = window.React = require('react');
import React from 'react';
import { Link } from 'react-router';

module.exports = React.createClass({
	render: function() {
		return (<nav className="navbar navbar-default">
	        	<div className="container">
	            <div className="navbar-header">
	                <button className="navbar-toggle collapsed" type="button" data-target="#collapsable_menu" data-toggle="collapse">
	                    <span className="icon-bar"></span>
	                    <span className="icon-bar"></span>
	                    <span className="icon-bar"></span>
	                </button>
	                <a href="" className="navbar-brand"><img src="public/images/spa_logo.png" alt="Go to Home page" /></a>
	            </div>
	            <div className="navbar-collapse collapse" id="collapsable_menu" role="navigation">
	                <ul className="nav navbar-nav">
	                    <li><Link to='home'>Home</Link></li>
	                    <li><a href="#">Services</a></li>
	                    <li><a href="#">Customers</a></li>
	                    <li><Link to='about'>About Us</Link></li>
	                </ul>
	                <ul className="nav navbar-nav pull-right">
	                    <li><a href="#myModal" role="button" data-toggle="modal"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
	                    <li><a href=""><span className="glyphicon glyphicon-registration-mark"></span> Register</a></li>
	                </ul>
	            </div>
	        	</div>
    		</nav>);
	}
});