<template>
  <div
    :class="[
      'group relative p-6 sm:p-8 md:p-10 rounded-2xl flex flex-col overflow-hidden transition-all duration-500 ease-out h-full w-full',
      isHighlighted
        ? 'bg-gradient-to-br from-primary to-primary/85 text-on-primary shadow-2xl z-10 md:scale-105 border border-on-primary-container/20'
        : 'bg-white border border-outline-variant/40 shadow-md hover:border-primary/50 hover:shadow-xl hover:-translate-y-1',
    ]"
  >
    <!-- Animated background gradient for non-highlighted cards -->
    <div v-if="!isHighlighted" class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <!-- Glowing border effect for highlighted card -->
    <div v-if="isHighlighted" class="absolute -inset-0.5 bg-gradient-to-br from-on-primary-container/20 to-transparent rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

    <!-- Content wrapper -->
    <div class="relative z-10 flex flex-col flex-1">
      <span
        :class="['text-label-md uppercase font-bold mb-4 block transition-all duration-300', isHighlighted ? 'text-on-primary-container' : 'text-on-surface-variant group-hover:text-primary']"
      >
        {{ tier }}
      </span>

      <span :class="['font-display text-4xl md:text-5xl mb-2 block font-black leading-none transition-all duration-300', isHighlighted ? 'text-white' : 'text-primary']">
        {{ price }}
      </span>
      <span :class="['text-sm mb-6 block transition-all duration-300', isHighlighted ? 'text-on-primary-container/80' : 'text-on-surface-variant']">
        {{ priceNote }}
      </span>

      <ul class="space-y-3 mb-8 flex-grow">
        <li
          v-for="(feature, index) in features"
          :key="feature"
          class="flex items-start gap-3 text-sm transition-all duration-300 opacity-0 animate-fade-in"
          :style="{ animationDelay: `${index * 50}ms` }"
        >
          <span translate="no" :class="['notranslate material-symbols-outlined text-base flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300', isHighlighted ? 'text-white' : 'text-primary']">check_circle</span>
          <span :class="isHighlighted ? 'text-white/95' : 'text-on-surface'">{{ feature }}</span>
        </li>
      </ul>

      <a href="/kontakt" class="block w-full mt-auto">
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
const props = withDefaults(
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

const priceNote = computed(() => {
  const p = props.price.toLowerCase();
  const isEn = /from\s*€|custom/.test(p);
  if (/individuell|auf anfrage|custom|on request/.test(p)) return isEn ? 'on request' : 'auf Anfrage';
  if (/monat|month|\/mo/.test(p)) return isEn ? 'monthly, excl. VAT' : 'monatlich, zzgl. MwSt.';
  if (/stunde|hour/.test(p)) return isEn ? 'per hour, excl. VAT' : 'pro Stunde, zzgl. MwSt.';
  return isEn ? 'one-off, excl. VAT' : 'einmalig, zzgl. MwSt.';
});
</script>
