import {type Event} from 'h3';
import {defineNitroPlugin} from '#imports';
import {useAuth, type Role} from '#authorization-module';
import type {User} from '../datasources/db/core/schemas/user';
import {type Authentication, Provider} from '#authentication-module';
import {getDatabaseClient, type SingleConnectionClient} from '@antify/database';

export default defineNitroPlugin((nitro) => {
	nitro.hooks.hook(`authenticationModule:${Provider.mailPassword}:login-success`, async (authentication: Authentication, event: Event) => {
		const client = await (await getDatabaseClient('core') as SingleConnectionClient)
			.connect();

		const user = await client.getModel<User>('users')
			.findOne({'authentications._id': authentication._id})
			.populate({
				path: 'authorization.appAccesses.roles',
				model: client.getModel<Role>('authorization_roles')
			});

		if (!user) {
			throw new Error(`Missing required authorization data for authentication of type ${authentication.provider} with identifier ${authentication.identifier}`)
		}

		await useAuth().login(event, user.authorization);
	});
})
