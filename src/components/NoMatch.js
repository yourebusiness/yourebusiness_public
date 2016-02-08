'use strict'
import React from 'react';
import bootStrap from 'bootstrap';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
import LoginModal from './header/LoginModal';
import Menu from './header/Menu';

import { createHistory, useBasename } from 'history';

var Logout = {
    render: function(){
        return (<div>
        	<LoginModal />
        	<Menu />
    		<div className='container'>
    			<h3>No Match page.</h3>
    			<h5>Click <Link to='/about'>here</Link> to go to about.</h5>
    		</div>
    	</div>);
    }
};

export default React.createClass(Logout);