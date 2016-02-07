'use strict'
import React from 'react';
import bootStrap from 'bootstrap';
import { Link } from 'react-router'
import LoginModal from './header/LoginModal';
import Menu from './header/Menu';

let About = {
    componentDidMount: function() {
        // clear authentication here...
    },
    render: function(){
        return (<div>
        	<LoginModal />
        	<Menu />
    		<div className='container'>
    			<h2>About page.</h2>
    			<h5>Click <a href='#'>here</a> to go to home....</h5>
    		</div>
    	</div>);
    }
};

module.exports = React.createClass(About);