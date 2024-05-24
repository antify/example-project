export default defineNuxtConfig({
  devtools: { enabled: true },
	modules: [
		'@antify/ui-module',
		'@antify/app-context-module',
		'@antify/database-module',
		'@antify/authentication-module',
		'@antify/authorization-module',
		'@antify/example-module'
	],
	authenticationModule: {
		passwordSalt: '#a!SaveSalt123',
		dataAdapterPath: './server/datasources/db/core/authentication-module-data-adapter',
	},
	authorizationModule: {
		jwtSecret: '#a!SuperSecret123',
		appHandlerFactoryPath: './authorization-module/appHandlerFactory',
		mainAppId: 'core',
		permissions: [],
	},
	appContextModule: {
		apps: [
			{
				id: 'core'
			},
			{
				id: 'tenant',
				isMultiTenant: true
			}
		],
	},
	ssr: false,
	imports: {
		autoImport: false
	},
})
