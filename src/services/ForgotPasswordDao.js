import $ from 'jquery';
import publicVar from '../constants/publicVar';
import ForgotPasswordActionCreator from '../actions/ForgotPasswordActionCreator';

export default {
	onSubmit: function(data) {
		let promise = new Promise(function(resolve, reject) {
			$.ajax({
	            type: "get",
	            url: publicVar.getUnsecuredEndpointWithIndex().concat('/api/signIn2'),
	            data: data,
	            success: function(data) {
	                resolve(data);
	            },
	            error: function(jqXHR, textStatus, errorThrown) {
	            	let error = {};
	            	error.jqXHR = jqXHR; error.textStatus = textStatus; error.errorThrown = errorThrown;
	                reject(error);
	            }
	        });
		});

		promise.then(function(data) {
			ForgotPasswordActionCreator.onSubmitDone(data);
		}, function(reason) {
			console.log('Error registering: ', reason);
		});
	}
};