<template>
  <section class="py-section-padding bg-white text-on-surface">
    <div class="max-w-container-max mx-auto px-gutter">
      <h2 class="font-display text-display text-[2.5rem] md:text-[3rem] mb-stack-lg text-center">{{ title }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
        <div
          v-for="(benefit, index) in benefits"
          :key="benefit.title"
          class="flex flex-col border border-black/20 items-center text-center p-8 rounded-xl glass-card backdrop-blur-sm hover:shadow-lg transition-all duration-300  group"
        >
          <span class="material-symbols-outlined text-[3.5rem] mb-4 text-primary group-hover:scale-110 transition-transform duration-300">{{ benefit.icon }}</span>
          <h3 class="text-headline-md font-bold mb-3">{{ benefit.title }}</h3>
          <p class="text-body-md">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  benefits: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}>();
</script>
