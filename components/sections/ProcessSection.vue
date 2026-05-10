<template>
  <section class="py-section-padding bg-white text-on-surface">
    <div class="max-w-container-max mx-auto px-gutter">
      <h2 class="font-display text-display text-[2.5rem] md:text-[3rem] mb-stack-lg text-center font-bold">{{ title }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-stack-md">
        <div
          v-for="(step, index) in steps"
          :key="step.title"
          class="flex flex-col text-center p-8 rounded-xl glass-card backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-110 group relative animate-fade-in-up border-2"
          :style="{ animationDelay: `${index * 80}ms` }"
        >
          <!-- Step chip + icon row -->
          <div class="flex flex-col items-center justify-center gap-4 mb-5">
            <div
              class="w-16 h-16 rounded-xl mt-2 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
              :class="col(index).iconBg"
            >
              <span class="material-symbols-outlined text-xl" :class="col(index).iconColor">{{ step.icon }}</span>
            </div>
            <span
              class="absolute top-2 -left-1 text-[0.6rem] uppercase bg-primary/80 text-white tracking-wider px-2 py-1 rounded-r-lg"
            >Schritt {{ index + 1 }}</span>
          </div>

          <!-- Title -->
          <h3 class="text-headline-md font-normal mb-3 group-hover:text-primary transition-colors duration-300">{{ step.title }}</h3>

          <!-- Description -->
          <p class="text-body-md">{{ step.description }}</p>
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

const stepColors = [
  { iconBg: 'bg-blue-100',    iconColor: 'text-blue-600',    borderColor: 'border-blue-400',    chipBg: 'bg-blue-50' },
  { iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600', borderColor: 'border-emerald-400', chipBg: 'bg-emerald-50' },
  { iconBg: 'bg-purple-100',  iconColor: 'text-purple-600',  borderColor: 'border-purple-400',  chipBg: 'bg-purple-50' },
  { iconBg: 'bg-amber-100',   iconColor: 'text-amber-600',   borderColor: 'border-amber-400',   chipBg: 'bg-amber-50' },
  { iconBg: 'bg-rose-100',    iconColor: 'text-rose-600',    borderColor: 'border-rose-400',    chipBg: 'bg-rose-50' },
] as const;

function col(index: number) {
  return stepColors[index % stepColors.length]!;
}
</script>

<style scoped>
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fade-in-up 0.7s ease-out forwards;
  opacity: 0;
}
</style>
