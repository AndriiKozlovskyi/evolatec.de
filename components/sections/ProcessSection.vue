<template>
  <section data-nav-label="Prozess" data-nav-icon="route" class="py-section-padding bg-surface-container-low text-on-surface">
    <div class="max-w-container-max mx-auto px-gutter">

      <!-- Header -->
      <div class="text-center mb-stack-lg max-w-2xl mx-auto">
        <span class="text-primary/60 font-semibold text-xs uppercase tracking-[0.25em] mb-3 block">Der Prozess</span>
        <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-on-surface leading-tight">{{ title }}</h2>
      </div>

      <!-- Process Card -->
      <div class="glass-card rounded-2xl bg-white p-8 md:p-14 shadow-sm border border-black/[0.04]">
        <div class="flex flex-col sm:flex-col lg:flex-row gap-10 md:gap-12">
          <div
            v-for="(step, index) in steps"
            :key="step.title"
            class="group animate-fade-in-up flex flex-1 flex-col items-center text-center"
            :style="{ animationDelay: `${index * 70}ms` }"
          >
            <!-- Ghost number -->
            <span class="text-[4rem] font-black leading-none select-none tracking-tight mb-4 text-on-surface/[0.06]">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <!-- Short accent line -->
            <div class="h-[2px] w-8 mb-4 rounded-full" :class="col(index).accentColor"></div>

            <!-- Title -->
            <h4 class="font-semibold text-on-surface text-base mb-2 group-hover:text-primary transition-colors duration-300 leading-snug">
              {{ step.title }}
            </h4>

            <!-- Description (min-height keeps each step's text block the same height across the row) -->
            <p class="text-on-surface-variant text-sm leading-relaxed lg:min-h-[6rem]">{{ step.description }}</p>

            <!-- Icon (pushed to the bottom so all icons align across columns) -->
            <div class="mt-auto pt-6">
              <div
                class="w-9 h-9 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                :class="col(index).iconBg"
              >
                <span class="material-symbols-outlined text-[1.1rem]" :class="col(index).iconColor">{{ step.icon }}</span>
              </div>
            </div>

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

