<template>
  <section class="relative min-h-screen sm:min-h-[600px] md:min-h-[819px] flex items-center overflow-hidden bg-primary-container pt-20 md:pt-0">
    <div class="absolute inset-0 z-0 opacity-40">
      <img
        :src="backgroundImage"
        alt="Hero background"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10"></div>
    <div class="relative z-20 max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-stack-lg items-center py-8 md:py-0">
      <!-- Left Content -->
      <div class="text-on-primary space-y-3 md:space-y-stack-md">
        <!-- Badge -->
        <span class="font-label-md text-label-md uppercase tracking-widest text-on-primary-container inline-block text-xs md:text-sm">
          {{ badge }}
        </span>

        <!-- Title - Responsive -->
        <h1 class="font-display text-3xl sm:text-5xl md:text-display leading-tight text-on-primary font-black">
          {{ title }}
        </h1>

        <!-- Description -->
        <p class="text-sm sm:text-body-md md:text-body-lg opacity-90 max-w-lg text-on-primary leading-relaxed">
          {{ description }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6">
          <BaseButton variant="secondary" size="md" class="flex-1 sm:flex-initial text-sm md:text-base">
            {{ primaryCTA }}
          </BaseButton>
          <BaseButton variant="outline" size="md" class="flex-1 sm:flex-initial text-sm md:text-base">
            {{ secondaryCTA }}
          </BaseButton>
        </div>
      </div>

      <!-- Right Stats Card - Hidden on mobile -->
      <div class="hidden md:block ml-20">
        <div class="glass-card p-8 rounded-2xl ambient-shadow backdrop-blur-xl border border-on-primary-container/10">
          <div class="grid grid-cols-2 gap-8">
            <StatCard
              v-for="(stat, index) in stats"
              :key="stat.label"
              :value="stat.value"
              :label="stat.label"
              :icon="stat.icon"
              class="relative py-6"
              :class="[
                index < 2 && 'border-b border-on-primary-container/10 pb-8',
                index % 2 === 0 && index < stats.length - 1 && 'border-r border-on-primary-container/10 pr-8'
              ]"
            />
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

<style scoped>
/* Smooth entrance animation for hero */
@keyframes hero-fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
