<template>
  <section class="py-section-padding">
    <div class="max-w-container-max mx-auto px-gutter">
      <!-- Header -->
      <div class="text-center mb-stack-lg max-w-2xl mx-auto">
        <span class="text-primary font-label-md uppercase tracking-[0.2em] mb-4 block">{{ subtitle }}</span>
        <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">{{ title }}</h2>
      </div>

      <!-- Portfolio Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Portfolio Items -->
        <PortfolioCard
          v-for="item in portfolioItems"
          :key="item.id"
          :image="item.image"
          :title="item.title"
          :description="item.description"
          :is-large="item.isLarge"
        >
          <template #action>
            <a class="mt-4 inline-flex items-center text-white font-bold group" href="#">
              Details ansehen
              <span class="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-2">arrow_forward</span>
            </a>
          </template>
        </PortfolioCard>

        <!-- Process Card -->
        <div class="md:col-span-2 glass-card p-12 rounded-xl flex flex-col justify-center">
          <span class="text-primary font-label-md uppercase mb-4 block">Der Prozess</span>
          <h3 class="font-display text-headline-lg text-primary mb-8">Vom Fundament zum Flagship-Store.</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(step, index) in processSteps" :key="step.title">
              <span class="text-headline-md text-primary/30 font-bold block mb-2">{{ String(index + 1).padStart(2, '0') }}</span>
              <h4 class="font-bold mb-2">{{ step.title }}</h4>
              <p class="text-on-surface-variant text-body-md">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  subtitle: string;
  title: string;
  portfolioItems: Array<{
    id: number;
    image: string;
    title: string;
    description: string;
    isLarge?: boolean;
  }>;
  processSteps: Array<{
    title: string;
    description: string;
  }>;
}>();
</script>
