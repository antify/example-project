import {defineDatabaseConfig} from '@antify/database';

export default defineDatabaseConfig({
	core: {
		databaseUrl: 'mongodb://core:core@localhost:27017/core',
		isSingleConnection: true,
		migrationDir: 'src/runtime/server/datasources/db/migrations',
		fixturesDir: [
			'server/datasources/db/core/fixtures',
			'node_modules/@antify/authorization-module/dist/cli/fixtures',
			'node_modules/@antify/example-module/dist/runtime/server/datasources/db/fixtures'
		],
		schemasDir: [
			'server/datasources/db/core/schemas',
			'node_modules/@antify/example-module/dist/runtime/server/datasources/db/schemas',
			'node_modules/@antify/authorization-module/dist/runtime/server/datasources/schemas'
		]
	},
	tenant: {
		databaseUrl: 'mongodb://root:root@127.0.0.1:27017',
		isSingleConnection: false,
		migrationDir: 'src/runtime/server/datasources/db/migrations',
		fixturesDir: [
			'node_modules/@antify/example-module/dist/runtime/server/datasources/db/fixtures'
		],
		schemasDir: [
			'node_modules/@antify/example-module/dist/runtime/server/datasources/db/schemas'
		],
		fetchTenants: async () => [{
			id: '65b23bf98f24acdf2bdc6f7f',
			name: 'Example tenant'
		}],
	},
});
