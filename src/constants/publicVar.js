const endpoint = {
	securedScheme: 'https://',
	unSecuredScheme: 'http://',
	domain: 'yourspa.com',
	domainWithIndex: 'yourspa.com/index.php',

	getUnsecuredEndpointWithIndex: function() {
		return this.unSecuredScheme + this.domainWithIndex;
	},
	getUnsecuredEndpointWithoutIndex: function() {
		return this.unSecuredScheme + this.domain;
	}
}

export default endpoint;