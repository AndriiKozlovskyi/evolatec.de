<template>
  <footer class="bg-surface-container-low border-t border-outline-variant/30 py-section-padding">
    <div class="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-4 gap-stack-lg">
      <!-- Brand Section -->
      <div class="space-y-4">
        <span class="font-display text-headline-md font-bold text-primary">EvolaTec</span>
        <p class="text-on-surface-variant text-body-md pr-8">
          Wir bauen die digitalen Landmarks von morgen. Präzision in jeder Zeile Code.
        </p>
      </div>

      <!-- Services -->
      <div class="flex flex-col gap-2">
        <span class="font-bold text-primary mb-2">Leistungen</span>
        <a
          v-for="service in services"
          :key="service"
          href="#"
          class="text-on-surface-variant hover:text-primary transition-colors"
        >
          {{ service }}
        </a>
      </div>

      <!-- Legal -->
      <div class="flex flex-col gap-2">
        <span class="font-bold text-primary mb-2">Rechtliches</span>
        <a
          v-for="legal in legalLinks"
          :key="legal"
          href="#"
          class="text-on-surface-variant hover:text-primary transition-colors"
        >
          {{ legal }}
        </a>
      </div>

      <!-- Newsletter -->
      <div class="space-y-4">
        <span class="font-bold text-primary mb-2">Newsletter</span>
        <div class="flex gap-0">
          <input
            type="email"
            placeholder="E-Mail"
            class="bg-surface-container border-none focus:ring-2 focus:ring-primary flex-grow rounded-l-lg p-3"
          />
          <button class="bg-primary text-on-primary px-4 rounded-r-lg">
            <span class="material-symbols-outlined">send</span>
          </button>
        </div>
        <p class="text-[12px] text-on-surface-variant/60">
          © 2024 EvolaTec. Digital Architecture & Engineering.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const services = ['E-Commerce', 'SaaS Development', 'UI/UX Design', 'SEO Strategie'];
const legalLinks = ['Impressum', 'Datenschutz', 'AGB', 'Support'];
</script>
