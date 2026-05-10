<template>
  <footer class="bg-surface-container-low border-t border-outline-variant/30 py-section-padding">
    <div class="max-w-container-max mx-auto px-gutter grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-stack-lg">
      <!-- Brand Section -->
      <div class="space-y-4 sm:col-span-2 md:col-span-1">
        <div class="flex items-center gap-2">
          <img src="/logo.png" alt="EvolaTec Logo" class="h-5 w-5" />
          <span class="font-display text-headline-md font-bold text-primary">EvolaTec</span>
        </div>
        <p class="text-on-surface-variant text-sm md:text-body-md md:pr-8">
          Wir bauen die digitalen Landmarks von morgen. Präzision in jeder Zeile Code.
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
      <nav class="flex flex-col gap-2" aria-label="Leistungen">
        <span class="font-bold text-primary mb-2">Leistungen</span>
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
      <nav class="flex flex-col gap-2" aria-label="Rechtliches">
        <span class="font-bold text-primary mb-2">Rechtliches</span>
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
            placeholder="E-Mail"
            class="bg-white border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-primary flex-grow rounded-lg p-3 text-sm"
          />
          <button
            type="submit"
            class="bg-primary text-on-primary px-4 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors min-h-[44px]"
          >
            <span class="material-symbols-outlined text-base">send</span>
            <span class="sm:hidden">Abonnieren</span>
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
const currentYear = new Date().getFullYear();

const services = [
  { label: 'Firmenwebsite', href: '/website-development' },
  { label: 'E-Commerce', href: '/e-commerce-development' },
  { label: 'Landingpage', href: '/landing-development' },
  { label: 'SEO Strategie', href: '/seo' },
  { label: 'UI/UX Design', href: '/design-ui-ux' },
];

const legalLinks = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
  { label: 'AGB', href: '/agb' },
  { label: 'Kontakt', href: '/kontakt' },
];
</script>
