import { DefaultRoute, Route } from 'react-router';

import Home from './components/Home';
import About from './components/About';
import HomeContents from './components/HomeContents';
import Registration from './components/registration/Registration';
import SuccessRegistration from './components/registration/SuccessRegistration';
import Login from './components/Login';
import ForgotPassword from './components/forgotPassword/ForgotPassword';
import ForgotPasswordSuccess from './components/forgotPassword/ForgotPasswordSuccess';

export default (  
  <Route name="app" path="/" handler={Home}>
    <DefaultRoute handler={HomeContents} />
    <Route name="about" path="/about" handler={About} />
    <Route name="home" path="/home" handler={HomeContents} />
    <Route name="registration" path="/registration" handler={Registration} />
    <Route name="successRegistration" path="/successregistration" handler={SuccessRegistration} />
    <Route name="login" path="/login" handler={Login}/>
    <Route name="forgotpassword" path="/forgotpassword" handler={ForgotPassword} />
    <Route name="forgotpasswordsuccess" path="/forgotpasswordsuccess" handler={ForgotPasswordSuccess} />
  </Route>
);