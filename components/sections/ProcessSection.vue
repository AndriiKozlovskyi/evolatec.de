<template>
  <section class="py-section-padding bg-surface-container-low text-on-surface">
    <div class="max-w-container-max mx-auto px-gutter">

      <!-- Header -->
      <div class="text-center mb-stack-lg max-w-2xl mx-auto">
        <span class="text-primary/60 font-semibold text-xs uppercase tracking-[0.25em] mb-3 block">Der Prozess</span>
        <h2 class="font-display text-[2.25rem] md:text-[2.75rem] font-black text-on-surface">{{ title }}</h2>
      </div>

      <!-- Process Card -->
      <div class="bg-white/60 glass-card rounded-2xl p-8 md:p-14 shadow-sm border border-black/[0.04]">
        <div class="flex flex-col sm:flex-col lg:flex-row gap-10 md:gap-12">
          <div
            v-for="(step, index) in steps"
            :key="step.title"
            class="group animate-fade-in-up flex flex-col"
            :style="{ animationDelay: `${index * 70}ms` }"
          >
            <!-- Ghost number -->
            <span class="text-[4rem] font-black leading-none select-none tracking-tight mb-1 text-on-surface/[0.06]">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <!-- Icon -->
            <div
              class="w-9 h-9 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
              :class="col(index).iconBg"
            >
              <span class="material-symbols-outlined text-[1.1rem]" :class="col(index).iconColor">{{ step.icon }}</span>
            </div>

            <!-- Short accent line -->
            <div class="h-[2px] w-8 mb-4 rounded-full" :class="col(index).accentColor"></div>

            <!-- Title -->
            <h4 class="font-semibold text-on-surface text-sm mb-2 group-hover:text-primary transition-colors duration-300 leading-snug">
              {{ step.title }}
            </h4>

            <!-- Description -->
            <p class="text-on-surface-variant text-xs leading-relaxed">{{ step.description }}</p>
          </div>
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
  { iconBg: 'bg-sky-50',     iconColor: 'text-sky-500',     accentColor: 'bg-sky-300' },
  { iconBg: 'bg-emerald-50', iconColor: 'text-emerald-500', accentColor: 'bg-emerald-300' },
  { iconBg: 'bg-violet-50',  iconColor: 'text-violet-500',  accentColor: 'bg-violet-300' },
  { iconBg: 'bg-amber-50',   iconColor: 'text-amber-500',   accentColor: 'bg-amber-300' },
  { iconBg: 'bg-rose-50',    iconColor: 'text-rose-500',    accentColor: 'bg-rose-300' },
] as const;

function col(index: number) {
  return stepColors[index % stepColors.length]!;
}
</script>

<style scoped>
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fade-in-up 0.5s ease-out forwards;
  opacity: 0;
}
</style>
