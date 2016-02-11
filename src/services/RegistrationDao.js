import $ from 'jquery';
import publicVar from '../constants/publicVar';

export default {
	getProvinces: function() {
		let provinces;

		$.ajax({
			url: publicVar.getUnsecuredEndpoint() + "/index.php/api/getProvinces",
			success: function(data, textStatus, jqXHR) {
				console.log("Data:", data);
			},
		});

		/*function success() {
			
		}*/
	}
}