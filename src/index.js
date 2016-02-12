import ReactDOM from 'react-dom';
import Router, { DefaultRoute, Route } from 'react-router';

import Home from './components/Home';
import About from './components/About';
import HomeContents from './components/HomeContents';
import Registration from './components/Registration';

let routes = (  
  <Route name="app" path="/" handler={Home}>
    <DefaultRoute handler={HomeContents} />
    <Route name="about" path="/about" handler={About}/>
    <Route name="home" path="/home" handler={HomeContents}/>
    <Route name="registration" path="/registration" handler={Registration}/>
  </Route>
);

Router.run(routes, function (Handler) {  
  ReactDOM.render(<Handler/>, document.getElementById('react'));
});