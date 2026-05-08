<template>
  <section class="py-section-padding bg-surface">
    <div class="max-w-container-max mx-auto px-gutter text-center">
      <h2 class="font-display text-display text-[2.5rem] md:text-[3rem] mb-stack-lg text-on-surface">{{ title }}</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(useCase, index) in useCases"
          :key="useCase"
          class="p-8 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:scale-105 group animate-fade-in-up"
          :style="{ animationDelay: `${index * 80}ms` }"
        >
          <div class="flex items-center justify-center mb-4">
            <span class="material-symbols-outlined text-[2.5rem] text-primary group-hover:scale-125 transition-transform duration-300">check_circle</span>
          </div>
          <p class="text-headline-sm font-bold text-on-surface">{{ useCase }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  useCases: string[];
}>();
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
  opacity: 0;
}
</style>
