<template>
  <section class="py-section-padding bg-gradient-to-r from-primary/90 via-primary to-primary/90 text-on-primary relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-on-primary-container/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-on-primary-container/10 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 max-w-container-max mx-auto px-gutter text-center">
      <div class="space-y-stack-md animate-fade-in-up">
        <h2 class="font-display text-[2.5rem] md:text-[3.5rem] leading-tight">{{ title }}</h2>
        <p class="text-body-lg md:text-headline-md opacity-90 max-w-2xl mx-auto leading-relaxed">{{ description }}</p>

        <div class="flex flex-col md:flex-row gap-4 justify-center pt-8">
          <BaseButton variant="secondary" size="lg">{{ primaryCta }}</BaseButton>
          <BaseButton variant="outline" size="lg">{{ secondaryCta }}</BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
}>();
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
}
</style>
