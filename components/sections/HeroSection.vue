<template>
  <section class="relative min-h-[600px] md:min-h-screen flex items-center overflow-hidden">
    <!-- Background image — full opacity, cinematic crop -->
    <img
      :src="backgroundImage"
      alt=""
      class="absolute inset-0 w-full h-full object-cover"
    />

    <!-- Dark gradient overlay: left-heavy, fades to transparent on the right -->
    <div class="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/75 to-slate-900/20"></div>

    <!-- Content -->
    <div class="relative z-10 w-full max-w-container-max mx-auto px-gutter pt-32 pb-20 md:pt-40 md:pb-28">
      <div class="max-w-2xl">

        <!-- Badge -->
        <span class="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-5 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
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
          <a href="/kontakt">
            <BaseButton variant="secondary" size="lg">{{ primaryCTA }}</BaseButton>
          </a>
          <BaseButton variant="outline" size="lg" class="!border-white/25 !text-white hover:!bg-white/10">
            {{ secondaryCTA }}
          </BaseButton>
        </div>

        <!-- Stats strip -->
        <div class="pt-8 border-t border-white/[0.12] grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-6">
          <div v-for="stat in stats" :key="stat.label" class="flex flex-col gap-1">
            <span class="material-symbols-outlined text-xl mb-0.5 bg-gradient-to-r from-violet-300 to-pink-400 bg-clip-text text-transparent">{{ stat.icon }}</span>
            <div class="font-black text-2xl leading-none bg-gradient-to-r from-violet-300 to-pink-400 bg-clip-text text-transparent">
              {{ stat.value }}
            </div>
            <div class="text-white/45 text-xs uppercase tracking-wider font-semibold">{{ stat.label }}</div>
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
