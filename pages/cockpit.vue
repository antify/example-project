<script lang="ts" setup>
import {
	definePageMeta,
	useRouteGuard,
	useAppContext
} from '#imports';
import {faCar, faHome} from '@fortawesome/free-solid-svg-icons';

definePageMeta({
	middleware: [
		function () {
			useAppContext().value.setContext('core');

			return useRouteGuard({
				appId: 'core',
				tenantId: null
			});
		}
	]
});

const navbarItems = [
	{
		label: 'Home',
		icon: faHome,
		to: '/'
	}, {
		label: 'Cars',
		icon: faCar,
		to: {name: 'cockpit-cars'}
	}
];
</script>

<template>
	<AntNavLeftLayout
		:navbar-items="navbarItems"
		:logo-route="{name: 'cockpit'}"
	>
		<template #logo-image>
			<img
				src="~/assets/logo.svg"
				class="w-full"
			>
		</template>

		<NuxtPage />
	</AntNavLeftLayout>
</template>
