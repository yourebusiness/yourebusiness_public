'use strict'
let React = window.React = require('react');
import ReactDOM from 'react-dom'
import bootStrap from 'bootstrap';
import { Router, Route, Link } from 'react-router'
import LoginModal from './header/LoginModal';
import Menu from './header/Menu';

let Logout = {
	componentDidMount: function() {
		// clear authentication here...
	},
    render: function(){
        return (<div>
        	<LoginModal />
        	<Menu />
    		<div className='container'>
    			<h3>You have successfully logged out.</h3>
    			<h5>Click <Link to='/'>here</Link> to re-login.</h5>
    		</div>
    	</div>);
    }
};

module.exports = React.createClass(Logout);