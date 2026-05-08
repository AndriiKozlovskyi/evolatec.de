<template>
  <section class="py-section-padding bg-white text-on-surface">
    <div class="max-w-container-max mx-auto px-gutter">
      <h2 class="font-display text-display text-[2.5rem] md:text-[3rem] mb-stack-lg text-center font-black">{{ title }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-stack-md">
        <div
          v-for="(step, index) in steps"
          :key="step.title"
          class="flex flex-col items-center border border-black/20 text-center p-8 rounded-xl glass-card backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-110 group relative animate-fade-in-up"
          :style="{ animationDelay: `${index * 80}ms` }"
        >
          <!-- Step Number Badge -->


          <!-- Icon -->
          <span class="material-symbols-outlined text-[3.5rem] mb-4 text-primary mt-2">{{ step.icon }}</span>

          <!-- Title -->
          <h3 class="text-headline-md font-black mb-3 t group-hover:text-primary transition-colors duration-300">{{ step.title }}</h3>

          <!-- Description -->
          <p class="text-body-md  mb-5">{{ step.description }}</p>

          <!-- Details list -->
          
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  steps: Array<{
    icon: string;
    title: string;
    description: string;
    details?: string[];
  }>;
}>();
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.7s ease-out forwards;
  opacity: 0;
}

.animate-fade-in-down {
  animation: fade-in-down 0.7s ease-out;
}
</style>
