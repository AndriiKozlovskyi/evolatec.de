<template>
  <nav class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/20 shadow-sm">
    <div class="max-w-container-max mx-auto px-gutter flex justify-between items-center h-20">
      <span class="font-display text-headline-md font-bold tracking-tighter text-primary">EvolaTec</span>
      
      <div class="hidden md:flex gap-8 items-center">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="link.href"
          :class="[
            'font-nav-link text-nav-link uppercase tracking-wider transition-colors',
            link.isActive
              ? 'text-primary border-b-2 border-primary pb-1'
              : 'text-on-surface-variant hover:text-primary',
          ]"
        >
          {{ link.label }}
        </a>
      </div>
      
      <BaseButton variant="primary" size="sm">Projekt anfragen</BaseButton>
    </div>
  </nav>
</template>

<script setup lang="ts">
const navLinks = [
  { id: 1, label: 'Startseite', href: '#', isActive: false },
  { id: 2, label: 'Webentwicklung', href: '#', isActive: true },
  { id: 3, label: 'SEO', href: '#', isActive: false },
  { id: 4, label: 'Preise', href: '#', isActive: false },
  { id: 5, label: 'Kontakt', href: '#', isActive: false },
];
</script>
