import $ from 'jquery';
import publicVar from '../constants/publicVar';
import RegistrationActionCreator from '../actions/RegistrationActionCreator';

export default {
	getProvinces: function() {
		let promise = new Promise(function(resolve, reject) {
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
	},
	getCitiesByProvinceId: function(id) {
		let promise = new Promise(function(resolve, reject) {
			$.ajax({
				url: publicVar.getUnsecuredEndpoint () + '/index.php/api/getCity/' + id,
	            success:function(data) {
	                resolve(data);
	            },
	            error: function(jqXHR, textStatus, errorThrown) {
	                reject(errorThrown)
	            }
			});
		});

		promise.then(function(data) {
			RegistrationActionCreator.getCitiesByProvinceIdDone(data);
		}, function(reason) {
			console.log('Error fetching cities: ', reason);
		});
	}
};