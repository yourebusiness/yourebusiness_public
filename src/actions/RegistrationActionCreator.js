'use strict';
import Dispatcher from '../dispatcher/Dispatcher';
import Actions from '../constants/Actions';
import RegistrationDao from '../services/RegistrationDao';
import publicVar from '../constants/publicVar';
//import SuccessRegistration from '../components/SuccessRegistration';
import Router from 'react-router';

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
	},
	onSubmit: function(data) {
		RegistrationDao.onSubmit(data);
	},
	onSubmitDone: function(data) {
		if(parseInt(data.statusCode) == 0){
			//console.log(Router);
			//Router.transitionTo('/successregistration');

            let loc = window.location, location;
            if (loc.port)
        		location = loc.protocol.concat('//', loc.hostname, ':', loc.port, '/#', '/successregistration');
			else
        		location = loc.protocol.concat('//', loc.hostname, '/#', '/successregistration');

        	window.location = location;
        } else
            alert(data.statusMessage.concat(' ', data.statusDesc));
	}
}