<script lang="ts" setup>
import { definePageMeta, navigateTo } from '#imports';

definePageMeta({
	middleware: [
		function (to) {
			to.name = 'tenants-tenantId-cars';

			return navigateTo(to);
		}
	]
});
</script>
