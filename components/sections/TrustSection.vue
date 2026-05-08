<template>
  <section class="py-stack-lg bg-surface-container-low border-b border-outline-variant/20">
    <div class="max-w-container-max mx-auto px-gutter flex flex-wrap justify-between items-center opacity-60 gap-stack-md">
      <span v-for="company in companies" :key="company" class="font-bold text-headline-md text-on-surface-variant grayscale">
        {{ company }}
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  companies: string[];
}>();
</script>
