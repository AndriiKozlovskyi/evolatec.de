<template>
  <section class="relative min-h-[819px] flex items-center overflow-hidden bg-primary-container">
    <div class="absolute inset-0 z-0 opacity-40">
      <img
        :src="backgroundImage"
        alt="Hero background"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10"></div>
    <div class="relative z-20 max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
      <!-- Left Content -->
      <div class="text-on-primary space-y-stack-md">
        <span class="font-label-md text-label-md uppercase tracking-widest text-on-primary-container">
          {{ badge }}
        </span>
        <h1 class="font-display text-display leading-tight text-on-primary">{{ title }}</h1>
        <p class="font-body-lg text-body-lg opacity-90 max-w-lg text-on-primary">{{ description }}</p>
        <div class="flex flex-wrap gap-4 pt-4">
          <BaseButton variant="secondary" size="md">{{ primaryCTA }}</BaseButton>
          <BaseButton variant="outline" size="md">{{ secondaryCTA }}</BaseButton>
        </div>
      </div>

      <!-- Right Stats Card -->
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
