<template>
  <section class="py-section-padding bg-surface-container-low">
    <div class="max-w-3xl mx-auto px-gutter">
      <h2 class="font-display text-headline-lg text-primary mb-stack-lg text-center">{{ title }}</h2>
      <div class="space-y-6">
        <details v-for="(faq, index) in faqs" :key="index" class="group bg-white rounded-lg p-6 ambient-shadow cursor-pointer">
          <summary class="flex justify-between items-center font-bold text-headline-md list-none">
            {{ faq.question }}
            <span class="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
          </summary>
          <p class="mt-4 text-on-surface-variant">{{ faq.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}>();
</script>
