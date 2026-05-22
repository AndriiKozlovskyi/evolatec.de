<template>
  <div class="bg-surface">
    <!-- TOP CTA: tabs + content right at the top -->
    <section class="pt-8 md:pt-14 pb-8 md:pb-12">
      <div class="max-w-3xl mx-auto px-gutter">
        <!-- Compact heading above tabs -->
        <div class="text-center mb-6">
          <h1 class="font-display text-2xl sm:text-3xl md:text-4xl font-black text-on-surface leading-tight">
            How Would You Like to Start?
          </h1>
          <p class="text-sm sm:text-base text-on-surface-variant mt-2">
            Book an appointment or send an enquiry — your choice.
          </p>
        </div>

        <!-- Tabs -->
        <div class="flex bg-surface-container-low rounded-full p-1 mb-6 max-w-md mx-auto">
          <button
            @click="tab = 'call'"
            :class="[
              'flex-1 py-2.5 px-3 rounded-full font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 min-h-[44px]',
              tab === 'call' ? 'bg-primary text-on-primary shadow-md' : 'text-on-surface-variant hover:text-primary',
            ]"
          >
            <span class="material-symbols-outlined text-lg">event</span>
            Book Appointment
          </button>
          <button
            @click="tab = 'form'"
            :class="[
              'flex-1 py-2.5 px-3 rounded-full font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 min-h-[44px]',
              tab === 'form' ? 'bg-primary text-on-primary shadow-md' : 'text-on-surface-variant hover:text-primary',
            ]"
          >
            <span class="material-symbols-outlined text-lg">mail</span>
            Send Enquiry
          </button>
        </div>

        <!-- APPOINTMENT tab -->
        <div v-show="tab === 'call'" class="bg-white rounded-2xl shadow-md border border-outline-variant/20 p-3 sm:p-4 animate-fade-in-up">
          <div class="rounded-xl overflow-hidden border border-outline-variant/30 bg-surface-container-low">
            <iframe
              :src="calComEmbedUrl"
              title="Book Appointment"
              loading="lazy"
              class="w-full h-[620px] sm:h-[680px] md:h-[720px] border-0 block"
              allow="payment"
            />
          </div>

          <div class="grid grid-cols-2 gap-2 mt-3">
            <a
              href="tel:+491756200862"
              class="group flex items-center gap-2 bg-surface-container-low rounded-lg p-3 hover:bg-primary/5 transition-colors"
            >
              <span class="material-symbols-outlined text-primary text-lg">phone</span>
              <span class="text-xs sm:text-sm font-semibold text-on-surface truncate">Call Us</span>
            </a>
            <a
              href="https://wa.me/491756200862"
              target="_blank"
              rel="noopener"
              class="group flex items-center gap-2 bg-surface-container-low rounded-lg p-3 hover:bg-primary/5 transition-colors"
            >
              <span class="material-symbols-outlined text-primary text-lg">chat</span>
              <span class="text-xs sm:text-sm font-semibold text-on-surface">WhatsApp</span>
            </a>
          </div>

          <p class="text-xs text-on-surface-variant/70 text-center mt-3">
            Widget not loading?
            <a :href="calComUrl" target="_blank" rel="noopener" class="text-primary font-semibold hover:underline">Open in new tab</a>
          </p>
        </div>

        <!-- FORM tab -->
        <div v-show="tab === 'form'" class="bg-white rounded-2xl shadow-md border border-outline-variant/20 p-5 sm:p-7 animate-fade-in-up">
          <ContactForm />
        </div>
      </div>
    </section>

    <!-- TEXT block — free initial consultation explainer -->
    <section class="bg-white border-y border-outline-variant/30 py-10 md:py-14">
      <div class="max-w-3xl mx-auto px-gutter text-center">
        <span class="inline-block text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3">
          Free Initial Consultation
        </span>
        <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-black text-on-surface leading-tight mb-4">
          Response within 24 Hours
        </h2>
        <p class="text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
          Tell us briefly about your project. We review your enquiry and get back to you with a
          <span class="text-on-surface font-semibold">no-obligation quote</span>
          or appointment suggestions — whether it's a landing page, business website or online shop.
        </p>

        <div class="flex flex-wrap gap-2 justify-center mt-5">
          <span v-for="chip in trustChips" :key="chip" class="inline-flex items-center gap-1.5 bg-primary/5 border border-primary/10 rounded-full px-3 py-1 text-xs sm:text-sm text-on-surface font-medium">
            <span class="material-symbols-outlined text-base text-primary">check</span>
            {{ chip }}
          </span>
        </div>
      </div>
    </section>

    <!-- Price calculator shortcut -->
    <section class="py-8 md:py-12">
      <div class="max-w-3xl mx-auto px-gutter">
        <NuxtLink
          to="/en/website-cost-calculator"
          class="flex items-center justify-between gap-4 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl p-4 sm:p-5 hover:shadow-lg transition-shadow duration-200 group"
        >
          <div class="flex items-center gap-4 min-w-0">
            <div class="w-11 h-11 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
              <span class="material-symbols-outlined">calculate</span>
            </div>
            <div class="min-w-0">
              <p class="text-xs uppercase tracking-wider text-white/70 font-semibold">Quick Check</p>
              <p class="text-sm sm:text-base font-bold">Calculate your price instantly</p>
            </div>
          </div>
          <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </NuxtLink>
      </div>
    </section>

    <FAQSection title="Frequently Asked Questions" :faqs="faqs" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const { hreflangLinks } = useLanguageSwitcher();

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://evolatec.de/en/contact/#webpage',
      url: 'https://evolatec.de/en/contact',
      name: 'Contact – Free Initial Consultation | EvolaTec',
      description: 'Free initial consultation for your website or online shop. Book an appointment or send an enquiry — response within 24 hours.',
      isPartOf: { '@id': 'https://evolatec.de/#website' },
      about: { '@id': 'https://evolatec.de/#organization' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What happens after my enquiry?', acceptedAnswer: { '@type': 'Answer', text: 'We review your enquiry and get back to you within 24 hours with a no-obligation quote or appointment suggestions for an initial conversation.' } },
        { '@type': 'Question', name: 'Is the initial consultation really free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The 15-minute initial conversation and the resulting quote are completely free and non-binding.' } },
        { '@type': 'Question', name: 'Can I start with a small budget?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Landing pages start from €500, business websites from €1,500. Use our price calculator to get an instant estimate.' } },
        { '@type': 'Question', name: 'When are you available?', acceptedAnswer: { '@type': 'Answer', text: 'Monday to Friday, 9am–5pm. For urgent enquiries, simply message us on WhatsApp — we usually respond within 1 hour.' } },
      ],
    },
  ],
};

useHead({
  title: 'Contact – Free Initial Consultation | EvolaTec',
  htmlAttrs: { lang: 'en' },
  meta: [
    {
      name: 'description',
      content: 'Free initial consultation for your website or online shop. Book an appointment or send an enquiry — response within 24 hours.',
    },
    { property: 'og:title', content: 'Contact | EvolaTec' },
    { property: 'og:description', content: 'Free initial consultation for your website or online shop. Response within 24 hours.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://evolatec.de/en/contact' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:locale:alternate', content: 'de_DE' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/en/contact' },
    ...hreflangLinks.value,
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});

const tab = ref<'call' | 'form'>('call');

const calComUrl = 'https://cal.eu/evolatec/15min';
const calComEmbedUrl = 'https://cal.eu/evolatec/15min?embed=true&layout=month_view&theme=light&hideEventTypeDetails=false';

const trustChips = [
  'No obligation',
  'Response in 24h',
  'GDPR compliant',
];

const faqs = [
  {
    question: 'What happens after my enquiry?',
    answer: 'We review your enquiry and get back to you within 24 hours with a no-obligation quote or appointment suggestions for an initial conversation.',
  },
  {
    question: 'Is the initial consultation really free?',
    answer: 'Yes. The 15-minute initial conversation and the resulting quote are completely free and non-binding.',
  },
  {
    question: 'Can I start with a small budget?',
    answer: 'Yes. Landing pages start from €500, business websites from €1,500. Use our price calculator to get an instant estimate.',
  },
  {
    question: 'When are you available?',
    answer: 'Monday to Friday, 9am–5pm. For urgent enquiries, simply message us on WhatsApp — we usually respond within 1 hour.',
  },
];
</script>
