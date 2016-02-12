'use strict'
import React from 'react';
import bootStrap from 'bootstrap';
import { RouteHandler } from 'react-router';
import LoginModal from './header/LoginModal';
import Menu from './header/Menu';

var Home = {
    render: function() {
        return (<div>
			<LoginModal />
			<Menu />
			<RouteHandler />
    	</div>);
	}
};

export default React.createClass(Home);