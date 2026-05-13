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
    href: '/firmenwebsite-erstellen-lassen',
    isActive: true,
    icon: 'language',
    submenu: [
      { id: 2.1, label: 'Firmenwebsite', href: '/firmenwebsite' },
      { id: 2.2, label: 'Landingpage',   href: '/landingpage-erstellen-lassen' },
      { id: 2.3, label: 'Online-Shop',   href: '/online-shop-erstellen-lassen' },
    ],
  },
  {
    id: 3,
    label: 'SEO',
    href: '/seo',
    isActive: false,
    icon: 'search_insights',
    submenu: [
      { id: 3.1, label: 'SEO Optimierung', href: '/seo-optimieren-lassen' },
      { id: 3.2, label: 'Local SEO', href: '/local-seo' },
      { id: 3.3, label: 'Linkbuilding', href: '/seo-linkbuilding' },
      { id: 3.4, label: 'SEO Audit & Analyse', href: '/seo-audit' },
    ],
  },
  {
    id: 4,
    label: 'Design & Content',
    href: '/webdesign',
    isActive: false,
    icon: 'edit_document',
    submenu: [
      { id: 4.1, label: 'Content & Copywriting', href: '/webseiten-texte-schreiben-lassen' },
      { id: 4.2, label: 'Branding & Corporate Design', href: '/design-branding' },
      { id: 4.3, label: 'UI/UX Design', href: '/ui-ux-design' },
    ],
  },
  {
    id: 5,
    label: 'Marketing',
    href: '/online-marketing',
    isActive: false,
    icon: 'campaign',
    submenu: [
      { id: 5.1, label: 'Google Ads', href: '/marketing-google-ads' },
      { id: 5.2, label: 'Social Media', href: '/marketing-social-media' },
    ],
  },
  { id: 6, label: 'Preise Kalkulator', href: '/webseite-kosten-kalkulator', isActive: false, icon: 'price_check' },
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
