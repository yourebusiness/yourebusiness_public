import Dispatcher from '../dispatcher/Dispatcher';
import assign from 'object-assign';
import Actions from '../constants/Actions';
import RegistrationDao from '../services/RegistrationDao';

let RegistrationActionCreate = assign({}, Dispatcher.prototype, {
	getProvinces: function() {
		RegistrationDao.getProvinces();
	},
	getProvincesDone: function() {
		this.dispatch({
			actionType: Actions.GET_PROVINCES,
			data: data,
		});
	}

});

module.exports = RegistrationActionCreate;