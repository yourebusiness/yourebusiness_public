import ReactDOM from 'react-dom';
import Home from './components/Home';
import About from './components/About';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={Home}>
      <Route path="/about" component={About}/>
    </Route>
  </Router>, document.getElementById('react'));