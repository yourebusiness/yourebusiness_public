const endpoint = {
	securedScheme: 'https://',
	unSecuredScheme: 'http://',
	domain: 'yourspa.com',
	domainWithIndex: 'yourspa.com/index.php',

	getUnsecuredEndpoint: function() {
		return this.unSecuredScheme + this.domain;
	}
}

export default endpoint;