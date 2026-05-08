<template>
  <div class="flex gap-6">
    <span class="material-symbols-outlined text-[32px] text-on-primary-container">{{ icon }}</span>
    <div>
      <h4 class="text-headline-md mb-1">{{ title }}</h4>
      <p class="text-on-primary-container/70">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  description: string;
}>();
</script>
