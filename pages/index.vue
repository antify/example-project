<template>
  <div class="p-2.5 flex flex-col gap-2.5">
		<div class="text-3xl">Example project playground</div>

		<div class="w-full flex gap-2.5">
			<AntButton
				:to="{name: 'cockpit'}">
				Go to Cockpit
			</AntButton>
			<AntButton
				:to="{name: 'tenants-tenantId', params: {tenantId: '65b23bf98f24acdf2bdc6f7f'}}">
				Go to Tenants
			</AntButton>
		</div>
	</div>
</template>
<script setup lang="ts">
</script>
