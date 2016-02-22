import $ from 'jquery';
import publicVar from '../constants/publicVar';
import ForgotPasswordActionCreator from '../actions/ForgotPasswordActionCreator';

export default {
	onSubmit: function(data) {
		let promise = new Promise(function(resolve, reject) {
			$.ajax({
	            type: "get",
	            url: publicVar.getUnsecuredEndpointWithIndex().concat('/api/forgotPassword'),
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
			console.log('Error forgot password: ', reason);
		});
	},
	forgotPasswordReset: function(hash) {
		let data = {hash: hash};
		let promise = new Promise(function(resolve, reject) {
			$.ajax({
	            type: "get",
	            url: publicVar.getUnsecuredEndpointWithIndex().concat('/api/forgotPasswordReset'),
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
			ForgotPasswordActionCreator.forgotPasswordResetDone(data);
		}, function(reason) {
			console.log('Error forgot password reset: ', reason);
		});
	}
};