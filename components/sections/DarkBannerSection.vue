<template>
  <section data-nav-label="Highlights" data-nav-icon="campaign" class="relative py-section-padding overflow-hidden">
    <NuxtPicture
      :src="image"
      alt=""
      format="avif,webp"
      sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw"
      :width="1920"
      :height="1080"
      :img-attrs="{ loading: 'lazy', decoding: 'async', class: 'absolute inset-0 w-full h-full object-cover' }"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-primary-container/90 via-primary-container/80 to-primary-container/40"></div>

    <div class="relative max-w-container-max mx-auto px-gutter">
      <div class="max-w-xl">
        <span
          v-if="badge"
          class="inline-block text-xs font-bold uppercase tracking-widest mb-4"
          :class="badgeClass"
        >{{ badge }}</span>

        <h2 class="font-display text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          <slot name="title" />
        </h2>

        <p class="font-body-lg text-white/70 mb-10">{{ description }}</p>

        <ul v-if="checklist?.length" class="grid sm:grid-cols-2 gap-3 mb-10">
          <li
            v-for="item in checklist"
            :key="item"
            class="flex items-center gap-3 rounded-xl bg-white/[0.07] border border-white/10 backdrop-blur-sm px-4 py-3 transition-colors duration-300 hover:bg-white/[0.12]"
          >
            <span translate="no" class="notranslate material-symbols-outlined text-xl text-blue-300 flex-shrink-0">check_circle</span>
            <span class="text-white/90 text-sm font-body-md leading-snug">{{ item }}</span>
          </li>
        </ul>

        <a :href="ctaHref">
          <BaseButton variant="secondary" size="lg">{{ ctaText }}</BaseButton>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    image: string;
    badge?: string;
    badgeClass?: string;
    description: string;
    checklist?: string[];
    ctaText: string;
    ctaHref?: string;
  }>(),
  {
    badgeClass: 'text-blue-400',
    ctaHref: '/kontakt',
  }
);
</script>
