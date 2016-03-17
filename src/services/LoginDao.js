import $ from 'jquery';
import publicVar from '../constants/publicVar';
import LoginActionCreator from '../actions/LoginActionCreator';

export default {
	onSubmit: function(data) {
		// curl http://yourebusinessrest.com/mytoken.php -d 'grant_type=password&username=simply.amazing.wizard@gmail.com&password=1234'
		let promise = new Promise(function(resolve, reject) {
			$.ajax({
	            type: "POST",
	            //url: publicVar.getUnsecuredEndpointWithIndex().concat('/api/signIn2'),
	            url: publicVar.getUnsecuredRESTWithoutIndex(),
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
			LoginActionCreator.onSubmitDone(data);
		}, function(reason) {
			console.log('Error registering: ', reason);
		});
	}
};