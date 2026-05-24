<template>
  <section
    data-nav-label="Start"
    data-nav-icon="home"
    class="relative min-h-[calc(100svh-5rem)] md:min-h-[min(85vh,820px)] lg:min-h-[calc(100vh-5rem)] flex items-center overflow-hidden"
  >
    <!-- CSS gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#2d1470] via-[#1a1060] to-[#0e1a5a]">
      <div class="absolute -top-[25%] -right-[15%] w-[65%] h-[65%] rounded-full bg-violet-400/35 blur-[110px]"></div>
      <div class="absolute -bottom-[15%] -left-[10%] w-[55%] h-[55%] rounded-full bg-indigo-400/30 blur-[90px]"></div>
      <div class="absolute top-[15%] left-[35%] w-[40%] h-[40%] rounded-full bg-purple-400/20 blur-[70px]"></div>
      <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px); background-size: 72px 72px;"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 w-full max-w-container-max mx-auto px-gutter pt-10 pb-12 md:pt-14 md:pb-14">
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
    backgroundImage?: string;
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

<style scoped>
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(6px); }
}
.animate-bounce-slow {
  animation: bounce-slow 1.8s ease-in-out infinite;
}
</style>
