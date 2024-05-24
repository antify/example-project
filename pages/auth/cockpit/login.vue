<script lang="ts" setup>
import {useRouter, useGuard} from '#imports';

const router = useRouter();

function onLogin() {
	useGuard().refresh();
	router.push({name: 'cockpit'});
}
</script>

<template>
	<AuthenticationModuleMailPasswordLoginPage
		provider="cockpit"
		:forgot-password-route="{ name: 'auth-cockpit-forgot-password' }"
		@login="() => onLogin()"
	/>
</template>
