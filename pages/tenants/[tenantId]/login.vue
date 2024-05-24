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
		provider="core"
		:forgot-password-route="{ name: 'cockpit-forgot-password' }"
		@login="() => onLogin()"
	/>
</template>
