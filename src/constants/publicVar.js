const endpoint = {
	securedScheme: 'https://',
	unSecuredScheme: 'http://',
	domain: 'yourebusiness.com',
	domainWithIndex: 'yourebusiness.com/index.php',

	restTokenUrl: 'yourebusiness.com',
	restTokenUrlPath: '/oauth/token',
	client_id: '6',
	client_secret: 'mjy4eilKhSJPd8y4IkHUPxiYvzB3UMShxNyJGZVz',

	// adminDomainAndPath: 'http://127.0.0.1:8000/#/app',
	adminDomainAndPath: 'http://yourebusiness.com/admin',

	getUnsecuredEndpointWithIndex: function() {
		return this.unSecuredScheme.concat(this.domain);
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