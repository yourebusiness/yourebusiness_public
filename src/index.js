'use strict'
let ReactDOM = require('react-dom');
let Logout = require('./components/Logout');
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={Logout}>
    </Route>
  </Router>, document.getElementById('react'));