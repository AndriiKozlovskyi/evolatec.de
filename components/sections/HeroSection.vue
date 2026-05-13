<template>
  <section class="relative min-h-[calc(100svh-5rem)] md:min-h-screen flex items-center overflow-hidden">
    <!-- Background image — full opacity, cinematic crop -->
    <img
      :src="backgroundImage"
      alt=""
      fetchpriority="high"
      loading="eager"
      decoding="async"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <!-- Dark gradient overlay: left-heavy, fades to transparent on the right -->
    <div class="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/75 to-slate-900/20"></div>

    <!-- Content -->
    <div class="relative z-10 w-full max-w-container-max mx-auto px-gutter pt-10 pb-12 md:pt-40 md:pb-28">
      <div class="max-w-2xl">

        <!-- Badge -->
        <span class="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-5 font-black text-inverse-primary">
          {{ badge }}
        </span>

        <!-- Title -->
        <h1 class="font-display text-4xl sm:text-5xl md:text-[3.75rem] font-black text-white leading-[1.1] mb-6">
          {{ title }}
        </h1>

        <!-- Description -->
        <p class="text-white/65 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
          {{ description }}
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-3 mb-14">
          <a href="/kontakt" class="w-full sm:w-auto">
            <BaseButton variant="secondary" size="lg" class="w-full sm:w-auto">{{ primaryCTA }}</BaseButton>
          </a>
          <a href="/webseite-kosten-kalkulator" class="w-full sm:w-auto">
            <BaseButton variant="outline" size="lg" class="w-full sm:w-auto !border-white/30 !text-white hover:!bg-white/10">
              {{ secondaryCTA }}
            </BaseButton>
          </a>
        </div>

        <!-- Stats strip -->
        <div class="relative pt-8">
          <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-violet-400/35 via-white/10 to-transparent"></div>
          <div class="grid grid-cols-2 sm:grid-cols-4 items-center text-center">
            <div
              v-for="(stat, i) in stats"
              :key="stat.label"
              :class="[
                'flex flex-col gap-1.5 py-2 px-3 sm:px-6 sm:first:pl-0',
                i < stats.length - 1 ? 'sm:border-r sm:border-white/[0.12]' : '',
              ]"
            >
              <span class="material-symbols-outlined text-[1.1rem] leading-none text-white">{{ stat.icon }}</span>
              <div class="font-black text-[1rem] leading-none text-white">
                {{ stat.value }}
              </div>
              <div class="text-white/40 text-[0.65rem] uppercase tracking-widest">{{ stat.label }}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    backgroundImage: string;
    badge: string;
    title: string;
    description: string;
    primaryCTA: string;
    secondaryCTA: string;
    stats: Array<{ value: string; label: string; icon: string }>;
  }>(),
  {}
);
</script>
