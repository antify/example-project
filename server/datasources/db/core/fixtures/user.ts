import {defineFixture} from '@antify/database';
import {type User} from '../schemas/user';
// TODO:: fix it after authentication-module is fixed
import {hashPassword} from '../../../../../node_modules/@antify/authentication-module/dist/cli/hash-password'
import {
	generateAuthorizations
} from "../../../../../node_modules/@antify/authorization-module/dist/cli/fixture-utils/authorization";
import {
	generateAppAccesses
} from "../../../../../node_modules/@antify/authorization-module/dist/cli/fixture-utils/appAccess";

export const PASSWORD_SALT = '#a!SaveSalt123';
export const ADMIN_USER_ID = '63f73526b5db16c4a92d6c37';
export const EMPLOYEE_USER_ID = '63f73526b5db16c4a92d6c38';

export default defineFixture({
	async load(client) {
		await client.getModel<User>('users').insertMany([
			{
				_id: ADMIN_USER_ID,
				email: 'admin@admin.de',
				authentications: [
					{
						identifier: 'admin@admin.de',
						password: await hashPassword('admin', PASSWORD_SALT),
						provider: 'mailPassword'
					}
				],
				authorization: generateAuthorizations(1, {
					isSuperAdmin: true
				})[0]
			},
			{
				_id: EMPLOYEE_USER_ID,
				email: 'user@user.de',
				authentications: [
					{
						identifier: 'user@user.de',
						password: await hashPassword('admin', PASSWORD_SALT),
						provider: 'mailPassword'
					}
				],
				authorization: generateAuthorizations(1, {
					appAccesses: generateAppAccesses(1, {
						appId: 'tenant',
						tenantId: '65b23bf98f24acdf2bdc6f7f',
					})
				})[0]
			}
		]);
	},

	dependsOn() {
		return [];
	}
});
