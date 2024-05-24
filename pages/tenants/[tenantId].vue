<script lang="ts" setup>
import {
	useRoute,
	useRouteGuard,
	useAppContext,
	definePageMeta
} from '#imports';
import {faCar, faHome} from '@fortawesome/free-solid-svg-icons';

definePageMeta({
	middleware: [
		function (to) {
			const tenantId = (to.params?.tenantId || null) as string | null;

			useAppContext().value.setContext('tenant', tenantId);

			return useRouteGuard({
				appId: 'tenant',
				tenantId
			});
		}
	]
});

const route = useRoute();
const navbarItems = [
	{
		label: 'Home',
		icon: faHome,
		to: '/'
	}, {
		label: 'Cars',
		icon: faCar,
		to: {name: 'tenants-tenantId-cars', params: {tenantId: route.params.tenantId}}
	}
];
</script>

<template>
	<AntNavLeftLayout
		:navbar-items="navbarItems"
		:logo-route="{name: 'tenants-tenantId', params: {tenantId: $route.params.tenantId}}"
	>
		<template #logo-image>
			<img
				src="../../assets/logo.svg"
				class="w-full"
			>
		</template>

		<NuxtPage/>
	</AntNavLeftLayout>
</template>
