<template>
  <section class="py-section-padding bg-surface-container-low">
    <div class="max-w-3xl mx-auto px-gutter">
      <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-stack-lg text-center leading-tight">{{ title }}</h2>
      <div class="space-y-6">
        <details v-for="(faq, index) in faqs" :key="index" class="group bg-white rounded-lg p-4 sm:p-6 ambient-shadow">
          <summary class="flex justify-between items-center gap-4 font-bold text-base sm:text-headline-md list-none min-h-[44px] cursor-pointer select-none">
            <span>{{ faq.question }}</span>
            <span class="material-symbols-outlined transition-transform group-open:rotate-180 flex-shrink-0">expand_more</span>
          </summary>
          <p class="mt-4 text-on-surface-variant text-sm sm:text-base">{{ faq.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}>();

// Auto-inject FAQPage schema.org structured data for SEO rich results
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: props.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }),
    },
  ],
});
</script>
