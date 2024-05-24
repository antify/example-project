import {getDatabaseClient, type SingleConnectionClient} from '@antify/database';
import {defineDataAdapter, type Provider} from '#authentication-module';
import {type User} from './schemas/user';

export default defineDataAdapter({
	async findAuthentication(identifier: string, password: string, provider: Provider) {
		const client = await (await getDatabaseClient('core') as SingleConnectionClient)
			.connect();

		const user = await client.getModel<User>('users').findOne({
			'authentications.identifier': identifier,
			'authentications.password': password,
			'authentications.provider': provider
		})

		return user?.authentications.find(auth =>
			auth.identifier === identifier &&
			auth.password === auth.password &&
			auth.identifier === identifier) || null;
	}
});
