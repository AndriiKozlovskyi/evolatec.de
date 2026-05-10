<template>
  <section class="py-section-padding bg-gradient-to-r from-primary via-primary/95 to-primary/90 text-on-primary">
    <div class="max-w-container-max mx-auto px-gutter">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
        <!-- Content -->
        <div class="space-y-stack-md">
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight">{{ title }}</h2>
          <p class="text-body-lg opacity-90 leading-relaxed mb-8">
            Unsere Landingpages sind technisch optimiert: schnelle Ladezeiten, mobile Optimierung, strukturierte Daten und moderne SEO-Standards.
          </p>

          <div class="space-y-4">
            <div v-for="feature in features" :key="feature" class="flex items-start gap-4 group">
              <span class="material-symbols-outlined text-[1.5rem] flex-shrink-0 text-on-primary-container group-hover:scale-125 transition-transform duration-300">check_circle</span>
              <span class="text-body-md pt-1">{{ feature }}</span>
            </div>
          </div>

          <BaseButton variant="secondary" size="md" class="mt-8">Mehr über SEO erfahren</BaseButton>
        </div>

        <!-- Icon illustration -->
        <div class="hidden md:flex justify-center items-center">
          <div class="relative w-80 h-80">
            <!-- Animated background circles -->
            <div class="absolute inset-0 rounded-full bg-gradient-to-br from-on-primary-container/10 to-transparent blur-3xl animate-pulse"></div>
            <div class="absolute inset-12 rounded-full bg-gradient-to-tr from-on-primary-container/5 to-transparent blur-2xl animate-pulse" style="animation-delay: 1s"></div>

            <!-- Center icon -->
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="material-symbols-outlined text-[120px] opacity-30">analytics</span>
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
  features: string[];
}>();
</script>
