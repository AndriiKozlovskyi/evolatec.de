<template>
  <section class="py-section-padding bg-gradient-to-b from-surface to-surface/95 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10">
      <div class="max-w-container-max mx-auto px-gutter text-center mb-stack-lg animate-fade-in-up">
        <span class="text-label-md uppercase font-bold text-primary tracking-widest mb-2 block">
          {{ title.split(' ').slice(0, 1).join(' ') }}
        </span>
        <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black text-on-surface mb-6 leading-tight">{{ title }}</h2>
        <p class="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">{{ subtitle }}</p>
      </div>

      <div class="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
        <div
          v-for="(plan, index) in pricingPlans"
          :key="plan.tier"
          class="animate-fade-in-up"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <PricingCard
            :tier="plan.tier"
            :price="plan.price"
            :features="plan.features"
            :button-text="plan.buttonText"
            :is-highlighted="plan.isHighlighted"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  pricingPlans: Array<{
    tier: string;
    price: string;
    features: string[];
    buttonText: string;
    isHighlighted?: boolean;
  }>;
}>();
</script>
