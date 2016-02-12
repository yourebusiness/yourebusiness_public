import $ from 'jquery';
import publicVar from '../constants/publicVar';
import RegistrationActionCreator from '../actions/RegistrationActionCreator';

export default {
	getProvinces: function() {
		var promise = new Promise(function(resolve, reject) {
			$.ajax({
				url: publicVar.getUnsecuredEndpoint() + '/index.php/api/getProvinces',
				success: function(data, textStatus, jqXHR) {
					resolve(data);		
				},
				error: function(jqXHR, textStatus, errorThrown) {
					reject(errorThrown);
				}
			});
		});

		promise.then(function(data) {
			RegistrationActionCreator.getProvincesDone(data);
		}, function(reason) {
			console.log('Error fetching provinces: ', reason);
		});
	}
}