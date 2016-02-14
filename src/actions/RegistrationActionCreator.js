'use strict'
import Dispatcher from '../dispatcher/Dispatcher';
import Actions from '../constants/Actions';
import RegistrationDao from '../services/RegistrationDao';

export default {
	getProvinces: function() {
		RegistrationDao.getProvinces();
	},	
	getProvincesDone: function(data) {
		Dispatcher.dispatch({
			actionType: Actions.GET_PROVINCES,
			data
		});
	},
	getCitiesByProvinceId: function(id) {
		RegistrationDao.getCitiesByProvinceId(id);
	},
	getCitiesByProvinceIdDone: function(data) {
		Dispatcher.dispatch({
			actionType: Actions.GET_CITIES,
			data
		});
	}
}

//module.exports = RegistrationActionCreator;