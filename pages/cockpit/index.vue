<script lang="ts" setup>
import { definePageMeta, navigateTo } from '#imports';

definePageMeta({
	middleware: [
		function (to) {
			to.name = 'cockpit-cars';

			return navigateTo(to);
		}
	]
});
</script>
