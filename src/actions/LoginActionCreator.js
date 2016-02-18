'use strict';
import Dispatcher from '../dispatcher/Dispatcher';
import Actions from '../constants/Actions';
import LoginDao from '../services/LoginDao';
//import { HashLocation } from 'react-router';

export default {
	onSubmit: function(data) {
		LoginDao.onSubmit(data);
	},
	onSubmitDone: function() {
		console.log("Successfully login.");
	}
}