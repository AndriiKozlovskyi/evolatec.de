<template>
  <footer class="bg-surface-container-low border-t border-outline-variant/30 py-section-padding">
    <div class="max-w-container-max mx-auto px-gutter">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-stack-lg">

        <!-- Brand Section -->
        <div class="lg:col-span-4">
          <div class="flex flex-row items-center gap-2.5">
            <img src="/logo.png" alt="EvolaTec Logo" width="32" height="32" class="h-8 w-8" loading="lazy" />
            <span class="font-display text-headline-md font-bold tracking-tighter text-primary">EvolaTec</span>
          </div>

          <p class="text-on-surface-variant text-sm mt-4 max-w-xs">
            {{ isEnglish ? 'Websites, SEO and marketing — everything from one source.' : 'Websites, SEO und Marketing — alles aus einer Hand.' }}
          </p>

          <!-- Direct contact -->
          <div class="mt-6 flex flex-col gap-2.5">
            <a href="tel:+491756200862" class="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
              <span class="material-symbols-outlined text-base">phone</span>
              +49 175 620 0862
            </a>
            <a href="mailto:team@evolatec.de" class="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
              <span class="material-symbols-outlined text-base">mail</span>
              team@evolatec.de
            </a>
            <p class="inline-flex items-center gap-2 text-sm text-on-surface-variant">
              <span class="material-symbols-outlined text-base">location_on</span>
              Hamburg, Deutschland
            </p>
          </div>
        </div>

        <!-- Link Columns -->
        <div class="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          <!-- Service groups -->
          <nav
            v-for="group in serviceGroups"
            :key="group.title"
            class="flex flex-col gap-2"
            :aria-label="group.title"
          >
            <span class="font-bold text-primary mb-2 text-sm">{{ group.title }}</span>
            <a
              v-for="item in group.links"
              :key="item.href"
              :href="item.href"
              class="text-on-surface-variant hover:text-primary transition-colors text-sm leading-snug"
            >
              {{ item.label }}
            </a>
          </nav>

          <!-- Legal -->
          <nav class="flex flex-col gap-2" :aria-label="isEnglish ? 'Legal' : 'Rechtliches'">
            <span class="font-bold text-primary mb-2 text-sm">{{ isEnglish ? 'Legal' : 'Rechtliches' }}</span>
            <a
              v-for="legal in legalLinks"
              :key="legal.href"
              :href="legal.href"
              class="text-on-surface-variant hover:text-primary transition-colors text-sm leading-snug"
            >
              {{ legal.label }}
            </a>
          </nav>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="mt-12 pt-6 border-t border-outline-variant/30">
        <p class="text-xs text-on-surface-variant/70 text-center sm:text-left">
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

const serviceGroups = computed(() => {
  const en = isEnglish.value;
  return [
    {
      title: 'Website',
      links: [
        { label: en ? 'Business Website' : 'Firmenwebsite', href: en ? '/en/business-website-design' : '/firmenwebsite-erstellen-lassen' },
        { label: en ? 'Landing Page'     : 'Landingpage',   href: en ? '/en/landing-page-design'     : '/landingpage-erstellen-lassen' },
        { label: en ? 'Online Shop'      : 'Online-Shop',   href: en ? '/en/online-shop-development' : '/online-shop-erstellen-lassen' },
        { label: en ? 'Price Calculator' : 'Preise Kalkulator', href: en ? '/en/website-cost-calculator' : '/webseite-kosten-kalkulator' },
      ],
    },
    {
      title: 'SEO',
      links: [
        { label: en ? 'SEO Optimization' : 'SEO Optimierung', href: en ? '/en/seo-optimization'  : '/seo-optimieren-lassen' },
        { label: 'Local SEO',                                  href: en ? '/en/local-seo'         : '/local-seo' },
        { label: en ? 'Link Building'    : 'Linkbuilding',     href: en ? '/en/seo-link-building' : '/seo-linkbuilding' },
        { label: 'SEO Audit',                                  href: en ? '/en/seo-audit'         : '/seo-audit' },
      ],
    },
    {
      title: 'Design & Content',
      links: [
        { label: en ? 'Copywriting' : 'Webtexte', href: en ? '/en/website-copywriting' : '/webseiten-texte-schreiben-lassen' },
        { label: en ? 'Branding'    : 'Branding', href: en ? '/en/design-branding'     : '/design-branding' },
        { label: 'UI/UX Design',                  href: en ? '/en/ui-ux-design'        : '/ui-ux-design' },
      ],
    },
    {
      title: 'Marketing',
      links: [
        { label: 'Google Ads',   href: en ? '/en/google-ads-management'  : '/marketing-google-ads' },
        { label: 'Social Media', href: en ? '/en/social-media-marketing' : '/marketing-social-media' },
      ],
    },
  ];
});

const legalLinks = computed(() => {
  const en = isEnglish.value;
  return [
    { label: en ? 'Contact' : 'Kontakt',            href: en ? '/en/contact'        : '/kontakt' },
    { label: en ? 'Legal Notice' : 'Impressum',     href: en ? '/en/legal-notice'   : '/impressum' },
    { label: en ? 'Privacy Policy' : 'Datenschutz', href: en ? '/en/privacy-policy' : '/datenschutz' },
  ];
});
</script>
