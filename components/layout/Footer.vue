<template>
  <footer class="bg-surface-container-low border-t border-outline-variant/30 py-section-padding">
    <div class="max-w-container-max mx-auto px-gutter grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-stack-lg">
      <!-- Brand Section -->
      <div class="space-y-4 sm:col-span-2 md:col-span-1">
        <div class="flex flex-row items-center gap-3">
          <NuxtImg src="/logo.png" alt="EvolaTec Logo" :width="60" :height="60" format="webp" class="h-9 w-9" loading="eager" />
          <span class="font-display text-headline-md font-bold tracking-tighter text-primary sm:inline">EvolaTec</span>     
        </div>
        <p class="text-on-surface-variant text-sm md:text-body-md md:pr-8">
          {{ isEnglish ? 'Websites, SEO and marketing — everything from one source.' : 'Websites, SEO und Marketing — alles aus einer Hand.' }}
        </p>

        <!-- Direct contact -->
        <div class="flex flex-col gap-2 pt-2">
          <a href="tel:+491756200862" class="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
            <span class="material-symbols-outlined text-base">phone</span>
            +49 175 620 0862
          </a>
          <a href="mailto:team@evolatec.de" class="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
            <span class="material-symbols-outlined text-base">mail</span>
            team@evolatec.de
          </a>
        </div>
      </div>

      <!-- Services -->
      <nav class="flex flex-col gap-2" :aria-label="isEnglish ? 'Services' : 'Leistungen'">
        <span class="font-bold text-primary mb-2">{{ isEnglish ? 'Services' : 'Leistungen' }}</span>
        <a
          v-for="service in services"
          :key="service.label"
          :href="service.href"
          class="text-on-surface-variant hover:text-primary transition-colors text-sm md:text-base"
        >
          {{ service.label }}
        </a>
      </nav>

      <!-- Legal -->
      <nav class="flex flex-col gap-2" :aria-label="isEnglish ? 'Legal' : 'Rechtliches'">
        <span class="font-bold text-primary mb-2">{{ isEnglish ? 'Legal' : 'Rechtliches' }}</span>
        <a
          v-for="legal in legalLinks"
          :key="legal.label"
          :href="legal.href"
          class="text-on-surface-variant hover:text-primary transition-colors text-sm md:text-base"
        >
          {{ legal.label }}
        </a>
      </nav>

      <!-- Newsletter -->
      <div class="space-y-4 sm:col-span-2 md:col-span-1">
        <span class="font-bold text-primary block">Newsletter</span>
        <form @submit.prevent class="flex flex-col sm:flex-row gap-2">
          <label class="sr-only" for="footer-newsletter">E-Mail</label>
          <input
            id="footer-newsletter"
            type="email"
            autocomplete="email"
            inputmode="email"
            :placeholder="isEnglish ? 'Your email' : 'E-Mail'"
            class="bg-white border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-primary flex-grow rounded-lg p-3 text-sm"
          />
          <button
            type="submit"
            class="bg-primary text-on-primary px-4 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors min-h-[44px]"
          >
            <span class="material-symbols-outlined text-base">send</span>
            <span class="sm:hidden">{{ isEnglish ? 'Subscribe' : 'Abonnieren' }}</span>
          </button>
        </form>
        <p class="text-xs text-on-surface-variant/70">
          © {{ currentYear }} EvolaTec. Digital Architecture & Engineering.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { isEnglish } = useLanguageSwitcher();
const currentYear = new Date().getFullYear();

const services = computed(() => {
  const en = isEnglish.value;
  return [
    { label: en ? 'Business Website' : 'Firmenwebsite', href: en ? '/en/business-website-design' : '/firmenwebsite-erstellen-lassen' },
    { label: en ? 'Online Shop'      : 'E-Commerce',    href: en ? '/en/online-shop-development'  : '/online-shop-erstellen-lassen' },
    { label: en ? 'Landing Page'     : 'Landingpage',   href: en ? '/en/landing-page-design'      : '/landingpage-erstellen-lassen' },
    { label: en ? 'SEO Strategy'     : 'SEO Strategie', href: en ? '/en/seo'                      : '/seo' },
    { label: 'UI/UX Design',                            href: en ? '/en/ui-ux-design'              : '/ui-ux-design' },
  ];
});

const legalLinks = computed(() => {
  const en = isEnglish.value;
  return [
    { label: en ? 'Legal Notice' : 'Impressum',  href: en ? '/en/legal-notice'    : '/impressum' },
    { label: en ? 'Privacy Policy' : 'Datenschutz', href: en ? '/en/privacy-policy' : '/datenschutz' },
    { label: 'AGB',                               href: '/agb' },
    { label: en ? 'Contact' : 'Kontakt',          href: en ? '/en/contact'          : '/kontakt' },
  ];
});
</script>
