'use strict';
import Dispatcher from '../dispatcher/Dispatcher';
import Actions from '../constants/Actions';
import LoginDao from '../services/LoginDao';
//import { HashLocation } from 'react-router';

export default {
	onLoginSubmit: function(data) {
		LoginDao.onLoginSubmit(data);
	},
	onLoginSubmitDone: function() {
		console.log("Successfully login.");
	}
}