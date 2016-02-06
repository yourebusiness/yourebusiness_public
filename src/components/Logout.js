'use strict'
let React = window.React = require('react');
import ReactDOM from 'react-dom'
import bootStrap from 'bootstrap';
import { Router, Route, Link, browserHistory } from 'react-router'
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
    			<h5>Click <a href="#">here</a> to re-login.</h5>
    			<Link to='/sample'>Sample</Link>
    		</div>
    	</div>);
    }
};

module.exports = React.createClass(Logout);

      //<Route path="about" component={About} />
      //<Route path="inbox" component={Inbox} />

ReactDOM.render((
  <Router>
    <Route path="/" component={Logout}>
    	<Route path="sample" component={Menu} />
    </Route>
  </Router>
), document.body);