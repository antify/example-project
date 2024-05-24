import {defineAppHandlerFactory, navigateTo} from '#imports';

export default defineAppHandlerFactory((appId, tenantId) => {
	if (appId === 'core') {
		return {
			loginPageRoute: '/auth/cockpit/login',
			jailPageRoute: '/auth/cockpit/jail',
			providerJailPageRoute: '/auth/tenants/jail',
		};
	}

	if (appId === 'tenant') {
		return {
			onUnauthorized: () => {
				return navigateTo({name: 'auth-tenants-tenantId-login', params: {tenantId}});
			},
			onBannedSystemWide: () => {
				return navigateTo({name: 'auth-tenants-jail'});
			},
			onBannedInProvider: () => {
				return navigateTo({name: 'auth-tenants-tenantId-jail', params: {tenantId}});
			}
		};
	}

	throw new Error(`AppHandlerFactory not implemented for appId: ${appId}`);
});
