<template>
  <nav class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/20 shadow-sm">
    <div class="max-w-container-max mx-auto px-gutter flex justify-between items-center h-20">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200">
        <img src="/logo.png" alt="EvolaTec Logo" class="h-5 w-5" />
        <span class="font-display text-headline-md font-bold tracking-tighter text-primary hidden sm:inline">EvolaTec</span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex gap-4 lg:gap-8 items-center">
        <div
          v-for="link in navLinks"
          :key="link.id"
          class="relative group"
        >
          <a
            :href="link.href"
            :class="[
              'font-nav-link text-nav-link uppercase tracking-wider transition-colors flex items-center gap-2 py-2 px-3',
              link.isActive
                ? 'text-primary border-b-2 border-primary'
                : 'text-on-surface-variant hover:text-primary',
            ]"
          >
            <span v-if="link.icon" class="material-symbols-outlined text-lg">{{ link.icon }}</span>
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
                class="block px-6 py-3 text-on-surface hover:bg-surface-container-low hover:text-primary transition-colors duration-200 font-nav-link text-sm"
              >
                {{ sublink.label }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <button
        v-if="!mobileMenuOpen"
        @click="mobileMenuOpen = true"
        class="md:hidden p-2 text-on-surface hover:text-primary transition-colors h-12 w-12 flex items-center justify-center"
        aria-label="Menü öffnen"
      >
        <span class="material-symbols-outlined text-2xl">menu</span>
      </button>

      <!-- Desktop CTA -->
      <a href="/kontakt" class="hidden sm:inline-block">
        <BaseButton variant="primary" size="sm">Anfragen</BaseButton>
      </a>
    </div>

    <!-- Mobile Menu Overlay -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden fixed inset-0 top-20 bg-surface/95 backdrop-blur-md z-40 overflow-y-auto"
    >
      <div class="max-w-container-max mx-auto px-gutter py-6 space-y-2">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="link.href"
          @click="mobileMenuOpen = false"
          class="block p-4 rounded-lg text-on-surface hover:bg-primary/10 hover:text-primary transition-colors touch-target"
        >
          <div class="flex items-center gap-3 font-bold">
            <span class="material-symbols-outlined">{{ link.icon }}</span>
            {{ link.label }}
          </div>
        </a>

        <div
          v-for="link in navLinks.filter(l => l.submenu)"
          :key="`submenu-${link.id}`"
          class="border-t border-outline-variant/20 pt-4 mt-4"
        >
          <div class="font-bold text-primary px-4 mb-2 text-sm">Services</div>
          <a
            v-for="sublink in link.submenu"
            :key="sublink.id"
            :href="sublink.href"
            @click="mobileMenuOpen = false"
            class="block p-3 pl-10 text-on-surface hover:bg-primary/10 hover:text-primary transition-colors touch-target text-sm"
          >
            {{ sublink.label }}
          </a>
        </div>

        <div class="border-t border-outline-variant/20 pt-6 mt-6">
          <a href="/kontakt" @click="mobileMenuOpen = false" class="block">
            <BaseButton variant="primary" size="lg" class="w-full">Projekt anfragen</BaseButton>
          </a>
        </div>
      </div>

      <!-- Close Button -->
      <button
        @click="mobileMenuOpen = false"
        class="fixed top-6 right-6 p-2 text-on-surface hover:text-primary transition-colors h-12 w-12 flex items-center justify-center"
        aria-label="Menü schließen"
      >
        <span class="material-symbols-outlined text-2xl">close</span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const navLinks = [
  { id: 1, label: 'Startseite', href: '/', isActive: false, icon: 'home' },
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
  { id: 3, label: 'SEO', href: '/seo', isActive: false, icon: 'search_insights' },
  { id: 4, label: 'Preise', href: '/pricing', isActive: false, icon: 'price_check' },
  { id: 5, label: 'Kontakt', href: '/kontakt', isActive: false, icon: 'mail' },
];
</script>

<style scoped>
.touch-target {
  min-height: 44px;
  display: flex;
  align-items: center;
}
</style>
