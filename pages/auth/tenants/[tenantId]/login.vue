<script lang="ts" setup>
import {useRouter, useRoute, useGuard} from '#imports';

const router = useRouter();
const route = useRoute();

function onLogin() {
	useGuard().refresh();
	router.push({name: 'tenants-tenantId', params: {tenantId: route.params.tenantId}});
}
</script>

<template>
	<AuthenticationModuleMailPasswordLoginPage
		provider="core"
		:forgot-password-route="{name: 'auth-tenants-tenantId-forgot-password', params: {tenantId: $route.params.tenantId}}"
		@login="() => onLogin()"
	/>
</template>
