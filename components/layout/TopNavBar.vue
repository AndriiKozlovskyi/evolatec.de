<template>
  <nav class="fixed top-0 w-full z-50">
    <!-- Contact strip — desktop only -->
    <div class="hidden md:block bg-surface">
      <div class="max-w-container-max mx-auto px-gutter flex justify-center py-2 items-center h-9 gap-7">
        <a
          href="tel:+491756200862"
          class="flex items-center gap-1.5 text-black/60 hover:text-white transition-colors duration-200 text-xs font-medium"
        >
          <span class="material-symbols-outlined text-[13px] leading-none">phone</span>
          +49 175 620 0862
        </a>
        <a
          href="https://wa.me/491756200862"
          target="_blank"
          rel="noopener"
          class="flex items-center gap-1.5 text-black/60 hover:text-white transition-colors duration-200 text-xs font-medium"
        >
          <span class="material-symbols-outlined text-[13px] leading-none">chat</span>
          WhatsApp
        </a>
        <a
          href="mailto:team@evolatec.de"
          class="flex items-center gap-1.5 text-black/60 hover:text-white transition-colors duration-200 text-xs font-medium"
        >
          <span class="material-symbols-outlined text-[13px] leading-none">mail</span>
          team@evolatec.de
        </a>
      </div>
    </div>

    <!-- Main nav -->
    <div class="bg-surface backdrop-blur-md border-b border-outline-variant/20 shadow-sm">
    <div class="max-w-container-max mx-auto px-gutter flex justify-between items-center h-20">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200">
        <img src="/logo.png" alt="EvolaTec Logo" class="h-5 w-5" />
        <span class="font-display text-headline-md font-bold tracking-tighter text-primary sm:inline">EvolaTec</span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex gap-4 lg:gap-2 items-center">
        <div
          v-for="link in navLinks"
          :key="link.id"
          class="relative group"
        >
          <a
            :href="link.href"
            :class="[
              'font-nav-link text-nav-link uppercase tracking-wider transition-colors flex items-center gap-2 py-2 px-3 relative',
              isLinkActive(link)
                ? 'text-primary'
                : 'text-on-surface-variant hover:text-primary',
            ]"
          >
            <span
              v-if="isLinkActive(link)"
              class="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
            />
            <span class="material-symbols-outlined text-[17px] leading-none">{{ link.icon }}</span>
            <span class="hidden lg:inline text-xs">{{ link.label }}</span>
            <span v-if="link.submenu" class="material-symbols-outlined text-sm group-hover:rotate-180 transition-transform duration-300">
              expand_more
            </span>
          </a>

          <div
            v-if="link.submenu"
            class="absolute top-full left-0 mt-0 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-56 border border-outline-variant/20"
          >
            <div class="py-3">
              <a
                v-for="sublink in link.submenu"
                :key="sublink.id"
                :href="sublink.href"
                :class="[
                'block px-6 py-3 transition-colors duration-200 font-nav-link text-sm',
                route.path === sublink.href
                  ? 'text-primary font-semibold bg-primary/5'
                  : 'text-on-surface hover:bg-surface-container-low hover:text-primary',
              ]"
              >
                {{ sublink.label }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden p-2 text-on-surface hover:text-primary transition-colors h-12 w-12 flex items-center justify-center"
        aria-label="Menü öffnen"
      >
        <span class="material-symbols-outlined text-2xl" v-if="!mobileMenuOpen">menu</span>
        <span class="material-symbols-outlined text-2xl" v-if="mobileMenuOpen">close</span>
      </button>

      <!-- Desktop CTA -->
      <a href="/kontakt" class="hidden sm:inline-block">
        <BaseButton variant="primary" size="sm">Anfragen</BaseButton>
      </a>
    </div>
    </div>

    <!-- Mobile Menu Overlay -->
<div
  v-if="mobileMenuOpen"
  class="md:hidden fixed top-20 left-0 right-0 bottom-0  backdrop-blur-md z-60 "
>
      <div class="max-w-container-max mx-auto px-gutter bg-surface py-4 pb-32">
          <!-- Main Navigation Links -->
          <div class="space-y-2 mb-6">
            <a
              v-for="link in navLinks"
              v-show="!link.submenu"
              :key="link.id"
              :href="link.href"
              @click="mobileMenuOpen = false"
              class="flex items-center gap-4 p-4 rounded-lg text-on-surface hover:bg-primary/10 hover:text-primary transition-colors touch-target font-semibold"
            >
              <span class="material-symbols-outlined text-xl">{{ link.icon }}</span>
              <span>{{ link.label }}</span>
            </a>
          </div>

          <!-- Submenu Items -->
          <div
            v-for="link in navLinks.filter(l => l.submenu)"
            :key="`submenu-${link.id}`"
            class="border-t border-outline-variant/20 pt-6 mt-6"
          >
            <div class="font-bold text-primary px-4 mb-4 text-sm uppercase tracking-wider">📦 Services</div>
            <div class="space-y-2">
              <a
                v-for="sublink in link.submenu"
                :key="sublink.id"
                :href="sublink.href"
                @click="mobileMenuOpen = false"
                class="flex items-center gap-3 p-4 pl-8 text-on-surface hover:bg-primary/10 hover:text-primary transition-colors touch-target text-sm rounded-lg"
              >
                <span class="material-symbols-outlined text-lg">arrow_right</span>
                {{ sublink.label }}
              </a>
            </div>
          </div>

          <!-- Divider -->
          <div class="border-t border-outline-variant/20 my-6"></div>

          <!-- CTA Button -->
          <div class="px-4 mb-4">
            <a href="/kontakt" @click="mobileMenuOpen = false" class="block">
              <BaseButton variant="primary" size="lg" class="w-full text-base font-bold">
                🚀 Projekt anfragen
              </BaseButton>
            </a>
          </div>

          <!-- Secondary Links -->
          <div class="px-4 space-y-2">
            <a href="/marketing" @click="mobileMenuOpen = false" class="block p-3 text-sm text-on-surface-variant hover:text-primary transition-colors">
              📣 Online Marketing
            </a>
            <a href="/pricing" @click="mobileMenuOpen = false" class="block p-3 text-sm text-on-surface-variant hover:text-primary transition-colors">
              💰 Preise & Kosten
            </a>
            <a href="/seo" @click="mobileMenuOpen = false" class="block p-3 text-sm text-on-surface-variant hover:text-primary transition-colors">
              🔍 SEO Services
            </a>
          </div>
        </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const mobileMenuOpen = ref(false);
const route = useRoute();

function isLinkActive(link: (typeof navLinks)[number]) {
  if (link.href !== '#' && route.path === link.href) return true;
  return link.submenu?.some(s => route.path === s.href) ?? false;
}

const navLinks = [
  {
    id: 2,
    label: 'Website-Erstellung',
    href: '#',
    isActive: true,
    icon: 'language',
    submenu: [
      { id: 2.1, label: 'E-Commerce Entwicklung', href: '/e-commerce-development' },
      { id: 2.2, label: 'Landingpage', href: '/landing-development' },
      { id: 2.3, label: 'Firmenwebsite', href: '/website-development' },
      { id: 2.4, label: 'Kosten & Preise', href: '/website-development-cost' },
    ],
  },
  {
    id: 3,
    label: 'SEO',
    href: '#',
    isActive: false,
    icon: 'search_insights',
    submenu: [
      { id: 3.1, label: 'SEO Strategie', href: '/seo' },
      { id: 3.2, label: 'SEO Optimierung', href: '/seo-optimization' },
      { id: 3.3, label: 'Local SEO', href: '/seo-local' },
      { id: 3.4, label: 'Linkbuilding', href: '/seo-link-building' },
      { id: 3.5, label: 'SEO Audit & Analyse', href: '/seo-audit' },
    { id: 3.6, label: 'SEO Preise & Kosten', href: '/seo-pricing' },
    ],
  },
  {
    id: 4,
    label: 'Design & Content',
    href: '#',
    isActive: false,
    icon: 'edit_document',
    submenu: [
      { id: 4.1, label: 'Content & Copywriting', href: '/design-content' },
      { id: 4.2, label: 'Branding & Corporate Design', href: '/design-branding' },
      { id: 4.3, label: 'UI/UX Design', href: '/design-ui-ux' },
    ],
  },
  {
    id: 5,
    label: 'Marketing',
    href: '#',
    isActive: false,
    icon: 'campaign',
    submenu: [
      { id: 5.1, label: 'Online Marketing', href: '/marketing' },
      { id: 5.2, label: 'Google Ads', href: '/marketing-google-ads' },
      { id: 5.3, label: 'Social Media', href: '/marketing-social-media' },
    ],
  },
  { id: 6, label: 'Preise Kalkulator', href: '/pricing', isActive: false, icon: 'price_check' },
];
</script>

<style scoped>
.touch-target {
  min-height: 44px;
  display: flex;
  align-items: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
