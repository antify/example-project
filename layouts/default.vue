<script setup lang="ts">
import type {JsonWebToken} from "#authorization-module/types";

const defaultToken: Partial<JsonWebToken> = {
	apps: [
		{
			appId: 'core',
			isAdmin: true,
		},
		{
			appId: 'tenant',
			tenantId: '65b23bf98f24acdf2bdc6f7f',
			isAdmin: true
		}
	]
}
</script>

<template>
	<NuxtPage/>

	<AntToaster/>
	<AuthorizationModuleJWTHelper :default-token="defaultToken"/>
</template>
