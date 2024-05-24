import {defineSchema} from '@antify/database';
// TODO:: fix it after authentication-module is fixed
import {authenticationSchemaDefinition} from '../../../../../node_modules/@antify/authentication-module/dist/runtime/server/adapters/mongoose/authentication'
import {type Authentication} from '../../../../../node_modules/@antify/authentication-module/dist/runtime/server/types'
// TODO:: fix it after authorization-module is fixed
import {authorizationSchemaDefinition, type Authorization} from '../../../../../node_modules/@antify/authorization-module/dist/runtime/server/datasources/authorization';

export interface User {
	email: string;
	authentications: Authentication[];
	authorization: Authorization[];
}

export default defineSchema(async (client) => {
	client.getSchema('users').add({
		email: {
			type: String,
			required: true,
			unique: true
		},
		authentications: {
			type: [authenticationSchemaDefinition],
			required: true,
			default: []
		},
		authorization: {
			type: authorizationSchemaDefinition,
			required: true,
			default: {
				isSuperAdmin: false,
				isBanned: false,
				providerAccesses: []
			}
		}
	});
})
