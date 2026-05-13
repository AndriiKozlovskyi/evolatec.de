<template>
  <div
    :class="[
      'group relative p-6 sm:p-8 md:p-10 rounded-2xl flex flex-col overflow-hidden transition-all duration-500 ease-out',
      'hover:shadow-2xl',
      isHighlighted
        ? 'bg-gradient-to-br from-primary to-primary/80 text-on-primary shadow-2xl z-10 md:scale-105 border border-on-primary-container/20'
        : 'glass-card hover:border-primary/50 hover:shadow-lg hover:-translate-y-2',
    ]"
  >
    <!-- Animated background gradient for non-highlighted cards -->
    <div v-if="!isHighlighted" class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <!-- Glowing border effect for highlighted card -->
    <div v-if="isHighlighted" class="absolute -inset-0.5 bg-gradient-to-br from-on-primary-container/20 to-transparent rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

    <!-- Content wrapper -->
    <div class="relative z-10">
      <span
        :class="['text-label-md uppercase font-bold mb-4 block transition-all duration-300', isHighlighted ? 'text-on-primary-container' : 'text-on-surface-variant group-hover:text-primary']"
      >
        {{ tier }}
      </span>

      <span :class="['font-display text-4xl md:text-5xl mb-2 block font-black leading-none transition-all duration-300', isHighlighted ? 'text-white' : 'text-primary']">
        {{ price }}
      </span>
      <span :class="['text-sm mb-6 block transition-all duration-300', isHighlighted ? 'text-on-primary-container/80' : 'text-on-surface-variant']">
        Monatlich oder einmalig
      </span>

      <ul class="space-y-3 mb-10 flex-grow">
        <li
          v-for="(feature, index) in features"
          :key="feature"
          class="flex items-start gap-3 text-sm transition-all duration-300 opacity-0 animate-fade-in"
          :style="{ animationDelay: `${index * 50}ms` }"
        >
          <span class="material-symbols-outlined text-base flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform duration-300">check_circle</span>
          <span :class="isHighlighted ? 'text-white/90' : ''">{{ feature }}</span>
        </li>
      </ul>

      <a href="/kontakt" class="block w-full">
        <BaseButton
          :variant="isHighlighted ? 'secondary' : 'outline'"
          size="md"
          class="w-full"
        >
          {{ buttonText }}
        </BaseButton>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    tier: string;
    price: string;
    features: string[];
    buttonText?: string;
    isHighlighted?: boolean;
  }>(),
  {
    buttonText: 'Anfrage stellen',
    isHighlighted: false,
  }
);
</script>
