<template>
  <footer class="bg-surface-container-low border-t border-outline-variant/30 py-section-padding">
    <div class="max-w-container-max mx-auto px-gutter">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-stack-lg">

        <!-- Brand Section -->
        <div class="lg:col-span-4">
          <div class="flex flex-row items-center gap-2.5">
            <NuxtImg src="/logo.webp" alt="EvolaTec Logo" width="32" height="32" class="h-8 w-8" loading="lazy" />
            <span class="font-display text-headline-md font-bold tracking-tighter text-primary">EvolaTec</span>
          </div>

          <p class="text-on-surface-variant text-sm mt-4 max-w-xs">
            {{ isEnglish ? 'Websites, SEO and marketing — everything from one source.' : 'Websites, SEO und Marketing — alles aus einer Hand.' }}
          </p>

          <!-- Direct contact -->
          <div class="mt-6 flex flex-col gap-2.5">
            <a href="tel:+491756200862" class="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
              <span translate="no" class="notranslate material-symbols-outlined text-base">phone</span>
              +49 175 620 0862
            </a>
            <a href="mailto:team@evolatec.de" class="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
              <span translate="no" class="notranslate material-symbols-outlined text-base">mail</span>
              team@evolatec.de
            </a>
            <p class="inline-flex items-center gap-2 text-sm text-on-surface-variant">
              <span translate="no" class="notranslate material-symbols-outlined text-base">location_on</span>
              Hamburg, Deutschland
            </p>
          </div>

          <!-- Social -->
          <div class="mt-5">
            <a
              href="https://www.linkedin.com/company/121004478"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-white bg-[#0a66c2] hover:bg-[#004182] transition-colors duration-200"
              :aria-label="isEnglish ? 'EvolaTec on LinkedIn' : 'EvolaTec auf LinkedIn'"
            >
              <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
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
            <component
              :is="group.href ? 'a' : 'span'"
              :href="group.href || undefined"
              class="font-bold text-primary mb-2 text-sm"
              :class="group.href ? 'hover:text-primary/70 transition-colors' : ''"
            >{{ group.title }}</component>
            <a
              v-for="item in group.links"
              :key="item.href"
              :href="item.href"
              class="text-on-surface-variant hover:text-primary transition-colors text-sm leading-snug"
            >
              {{ item.label }}
            </a>
          </nav>

          <!-- Company -->
          <nav class="flex flex-col gap-2" :aria-label="isEnglish ? 'Company' : 'Unternehmen'">
            <span class="font-bold text-primary mb-2 text-sm">{{ isEnglish ? 'Company' : 'Unternehmen' }}</span>
            <a
              v-for="link in companyLinks"
              :key="link.href"
              :href="link.href"
              class="text-on-surface-variant hover:text-primary transition-colors text-sm leading-snug"
            >
              {{ link.label }}
            </a>
          </nav>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="mt-12 pt-6 border-t border-outline-variant/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p class="text-xs text-on-surface-variant">
          © {{ currentYear }} EvolaTec. Digital Architecture & Engineering.
        </p>
        <div class="flex gap-4">
          <a
            v-for="legal in legalLinks"
            :key="legal.href"
            :href="legal.href"
            class="text-xs text-on-surface-variant hover:text-primary transition-colors"
          >
            {{ legal.label }}
          </a>
        </div>
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
      href: en ? '/en/business-website' : '/firmenwebsite',
      links: [
        { label: en ? 'Business Website'  : 'Firmenwebsite erstellen', href: en ? '/en/business-website-design' : '/firmenwebsite-erstellen-lassen' },
        { label: en ? 'Landing Page'      : 'Landingpage erstellen',   href: en ? '/en/landing-page-design'     : '/landingpage-erstellen-lassen' },
        { label: en ? 'Online Shop'       : 'Online-Shop erstellen',   href: en ? '/en/online-shop-development' : '/online-shop-erstellen-lassen' },
      ],
    },
    {
      title: 'SEO',
      href: en ? '/en/seo' : '/seo',
      links: [
        { label: en ? 'SEO Optimization' : 'SEO Optimierung', href: en ? '/en/seo-optimization'  : '/seo-optimieren-lassen' },
        { label: 'Local SEO',                                  href: en ? '/en/local-seo'         : '/local-seo' },
        { label: en ? 'Link Building'    : 'Linkbuilding',     href: en ? '/en/seo-link-building' : '/seo-linkbuilding' },
        { label: 'SEO Audit',                                  href: en ? '/en/seo-audit'         : '/seo-audit' },
        { label: en ? 'GEO / AI Search'  : 'GEO / KI-Suche',  href: en ? '/en/ai-optimization'   : '/ai-optimierung' },
      ],
    },
    {
      title: 'Design & Content',
      href: undefined,
      links: [
        { label: en ? 'Web Design'   : 'Webdesign',  href: en ? '/en/web-design'          : '/webdesign' },
        { label: en ? 'Copywriting'  : 'Webtexte',  href: en ? '/en/website-copywriting' : '/webseiten-texte-schreiben-lassen' },
        { label: en ? 'Branding'     : 'Branding',  href: en ? '/en/design-branding'     : '/design-branding' },
        { label: 'UI/UX Design',                    href: en ? '/en/ui-ux-design'        : '/ui-ux-design' },
      ],
    },
    {
      title: 'Marketing',
      href: en ? '/en/online-marketing' : '/online-marketing',
      links: [
        { label: 'Google Ads',   href: en ? '/en/google-ads-management'  : '/marketing-google-ads' },
        { label: 'Social Media', href: en ? '/en/social-media-marketing' : '/marketing-social-media' },
      ],
    },
  ];
});

const companyLinks = computed(() => {
  const en = isEnglish.value;
  return [
    { label: 'Blog',                                       href: en ? '/en/blog'                    : '/blog' },
    { label: en ? 'Contact'         : 'Kontakt',          href: en ? '/en/contact'                 : '/kontakt' },
    { label: en ? 'Price Calculator': 'Preiskalkulator',  href: en ? '/en/website-cost-calculator' : '/webseite-kosten-kalkulator' },
  ];
});

const legalLinks = computed(() => {
  const en = isEnglish.value;
  return [
    { label: en ? 'Legal Notice'  : 'Impressum',   href: en ? '/en/legal-notice'   : '/impressum' },
    { label: en ? 'Privacy Policy': 'Datenschutz', href: en ? '/en/privacy-policy' : '/datenschutz' },
  ];
});
</script>
