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

        <div v-if="stats?.length" class="grid grid-cols-3 gap-6 mb-10">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="font-black text-3xl text-white mb-1">
              {{ stat.value }}
            </div>
            <div class="text-white/50 text-xs uppercase tracking-wider font-bold">{{ stat.label }}</div>
          </div>
        </div>

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
    stats?: Array<{ value: string; label: string }>;
    ctaText: string;
    ctaHref?: string;
  }>(),
  {
    badgeClass: 'text-blue-400',
    ctaHref: '/kontakt',
  }
);
</script>
