<template>
  <nav class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/20 shadow-sm">
    <div class="max-w-container-max mx-auto px-gutter flex justify-between items-center h-20">
      <a href="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200">
        <img src="/logo.png" alt="EvolaTec Logo" class="h-5 w-5" />
        <span class="font-display text-headline-md font-bold tracking-tighter text-primary">EvolaTec</span>
      </a>

      <div class="hidden md:flex gap-8 items-center">
        <div
          v-for="link in navLinks"
          :key="link.id"
          class="relative group"
        >
          <!-- Main Link -->
          <a
            :href="link.href"
            :class="[
              'font-nav-link text-nav-link uppercase tracking-wider transition-colors flex items-center gap-2',
              link.isActive
                ? 'text-primary border-b-2 border-primary pb-1'
                : 'text-on-surface-variant hover:text-primary',
            ]"
          >
            <span v-if="link.icon" class="material-symbols-outlined text-lg">{{ link.icon }}</span>
            {{ link.label }}
            <span v-if="link.submenu" class="material-symbols-outlined text-sm group-hover:rotate-180 transition-transform duration-300">
              expand_more
            </span>
          </a>

          <!-- Dropdown Menu -->
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

      <a href="/kontakt" class="inline-block">
        <BaseButton variant="primary" size="sm">Projekt anfragen</BaseButton>
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
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
