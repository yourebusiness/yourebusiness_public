const endpoint = {
	securedScheme: 'https://',
	unSecuredScheme: 'http://',
	domain: 'yourebusiness.com',
	domainWithIndex: 'yourebusiness.com/index.php',

	restTokenUrl: 'yourebusinessrest.com',
	restTokenUrlPath: '/mytoken.php',

	getUnsecuredEndpointWithIndex: function() {
		return this.unSecuredScheme + this.domainWithIndex;
	},
	getUnsecuredEndpointWithoutIndex: function() {
		return this.unSecuredScheme + this.domain;
	},
	getUnsecuredRESTWithoutIndex: function() {
		return this.unSecuredScheme.concat(this.restTokenUrl, restTokenUrlPath);
	}
}

export default endpoint;