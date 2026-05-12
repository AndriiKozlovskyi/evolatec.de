<template>
  <nav class="fixed top-0 w-full z-50">
  
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
            @click="link.href === '#' && $event.preventDefault()"
            :class="[
              'font-nav-link text-nav-link uppercase tracking-wider transition-colors flex items-center gap-2 py-2 px-3 relative',
              link.href === '#' ? 'cursor-default' : '',
              isLinkActive(link)
                ? 'text-primary'
                : 'text-on-surface-variant hover:text-primary',
            ]"
          >
            <span
              v-if="isLinkActive(link)"
              class="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
            />
            <span class="material-symbols-outlined text-[0.5rem] leading-none">{{ link.icon }}</span>
            <span class="hidden lg:inline text-[0.7rem]">{{ link.label }}</span>
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
        :aria-label="mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'"
        :aria-expanded="mobileMenuOpen"
        aria-controls="mobile-menu"
      >
        <span class="material-symbols-outlined text-2xl" v-if="!mobileMenuOpen">menu</span>
        <span class="material-symbols-outlined text-2xl" v-if="mobileMenuOpen">close</span>
      </button>

      <!-- Desktop CTA -->
      <a href="/kontakt" class="hidden sm:inline-block">
        <BaseButton variant="primary" size="sm">Anfragen</BaseButton>
      </a>
            <!-- Contact icons — desktop only -->
      <div class="absolute top-6 right-4 hidden md:flex items-center gap-1">
        <a
          href="tel:+491756200862"
          aria-label="Anrufen"
          class="w-9 h-9 flex items-center justify-center rounded-lg text-on-surface-variant hover:text-primary hover:bg-primary/8 transition-colors duration-200"
        >
          <span class="material-symbols-outlined text-[18px]">phone</span>
        </a>
        <a
          href="https://wa.me/491756200862"
          target="_blank"
          rel="noopener"
          aria-label="WhatsApp"
          class="w-9 h-9 flex items-center justify-center rounded-lg text-on-surface-variant hover:text-[#25D366] hover:bg-[#25D366]/8 transition-colors duration-200"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" class="w-[17px] h-[17px]">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
        <a
          href="mailto:team@evolatec.de"
          aria-label="E-Mail"
          class="w-9 h-9 flex items-center justify-center rounded-lg text-on-surface-variant hover:text-[#EA4335] hover:bg-[#EA4335]/8 transition-colors duration-200"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" class="w-[17px] h-[17px]">
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
          </svg>
        </a>
      </div>
    </div>
    </div>

    <!-- Mobile Menu Overlay -->
<div
  v-if="mobileMenuOpen"
  id="mobile-menu"
  class="md:hidden fixed top-20 left-0 right-0 bottom-0 backdrop-blur-md z-50 overflow-y-auto overscroll-contain bg-surface"
>
      <div class="max-w-container-max mx-auto px-gutter py-4 pb-32">
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
            <div class="font-bold text-primary px-4 mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
              <span class="material-symbols-outlined text-base">{{ link.icon }}</span>
              {{ link.label }}
            </div>
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
          <div class="px-4">
            <a href="/kontakt" @click="mobileMenuOpen = false" class="block">
              <BaseButton variant="primary" size="lg" class="w-full">
                <span class="material-symbols-outlined text-xl">rocket_launch</span>
                Projekt anfragen
              </BaseButton>
            </a>
          </div>
        </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from 'vue';

const mobileMenuOpen = ref(false);
const route = useRoute();

if (import.meta.client) {
  watch(mobileMenuOpen, (open) => {
    document.body.style.overflow = open ? 'hidden' : '';
  });
  watch(() => route.path, () => {
    mobileMenuOpen.value = false;
  });
  onBeforeUnmount(() => {
    document.body.style.overflow = '';
  });
}

function isLinkActive(link: (typeof navLinks)[number]) {
  if (link.href !== '#' && route.path === link.href) return true;
  return link.submenu?.some(s => route.path === s.href) ?? false;
}

const navLinks = [
  {
    id: 2,
    label: 'Website-Erstellung',
    href: '/website-development',
    isActive: true,
    icon: 'language',
    submenu: [
      { id: 2.1, label: 'E-Commerce Entwicklung', href: '/e-commerce-development' },
      { id: 2.2, label: 'Landingpage', href: '/landing-development' },
      { id: 2.3, label: 'Kosten & Preise', href: '/website-development-cost' },
    ],
  },
  {
    id: 3,
    label: 'SEO',
    href: '/seo',
    isActive: false,
    icon: 'search_insights',
    submenu: [
      { id: 3.1, label: 'SEO Optimierung', href: '/seo-optimization' },
      { id: 3.2, label: 'Local SEO', href: '/seo-local' },
      { id: 3.3, label: 'Linkbuilding', href: '/seo-link-building' },
      { id: 3.4, label: 'SEO Audit & Analyse', href: '/seo-audit' },
    { id: 3.5, label: 'SEO Preise & Kosten', href: '/seo-pricing' },
    ],
  },
  {
    id: 4,
    label: 'Design & Content',
    href: '/design',
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
    href: '/marketing',
    isActive: false,
    icon: 'campaign',
    submenu: [
      { id: 5.1, label: 'Google Ads', href: '/marketing-google-ads' },
      { id: 5.2, label: 'Social Media', href: '/marketing-social-media' },
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
