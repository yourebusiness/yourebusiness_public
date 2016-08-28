const endpoint = {
	securedScheme: 'https://',
	unSecuredScheme: 'http://',
	domain: 'yourebusiness.com',
	domainWithIndex: 'yourebusiness.com',

	restTokenUrl: 'yourebusinessrest.com',
	restTokenUrlPath: '/token.php',

	adminDomainAndPath: 'http://127.0.0.1:8000/#/app',

	getUnsecuredEndpointWithIndex: function() {
		return this.unSecuredScheme.concat(this.domainWithIndex);
	},
	getUnsecuredEndpointWithoutIndex: function() {
		return this.unSecuredScheme.concat(this.domain);
	},
	getUnsecuredRESTWithoutIndex: function() {
		return this.unSecuredScheme.concat(this.restTokenUrl, this.restTokenUrlPath);
	},
	getUnsecuredAdminDomainAndPath: function() {
		return this.adminDomainAndPath;
	}
}

export default endpoint;