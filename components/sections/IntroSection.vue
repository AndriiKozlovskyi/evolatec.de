<template>
  <section
    data-nav-label="Intro"
    data-nav-icon="info"
    class="py-section-padding bg-surface"
  >
    <div class="max-w-container-max mx-auto px-gutter">

      <!-- Image + Text split -->
      <div
        class="grid md:grid-cols-2 gap-stack-lg items-center"
        :class="usps?.length ? 'mb-stack-lg' : ''"
      >
        <div class="relative rounded-3xl overflow-hidden aspect-[3/2] md:h-96 md:aspect-auto order-2 md:order-1">
          <NuxtPicture
            :src="image"
            :alt="imageAlt"
            format="avif,webp"
            sizes="xs:360px sm:640px md:50vw lg:640px xl:640px xxl:640px"
            :width="640"
            :height="427"
            :img-attrs="{
              loading: 'lazy',
              decoding: 'async',
              class: 'absolute inset-0 w-full h-full object-cover',
            }"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>

        </div>

        <div class="order-1 md:order-2">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-stack-md">{{ heading }}</h2>
          <p
            v-for="(p, i) in paragraphs"
            :key="i"
            class="font-body-lg text-body-lg text-on-surface-variant"
            :class="i < paragraphs.length - 1 ? 'mb-6' : ''"
            v-html="p"
          />
        </div>
      </div>

      <!-- Optional USP grid -->
      <div v-if="usps?.length" class="grid md:grid-cols-3 gap-gutter">
        <div
          v-for="usp in usps"
          :key="usp.title"
          class="glass-card ambient-shadow bg-white/60 p-8 text-center border-t-4 transition-all duration-300 hover:scale-105"
          :class="usp.borderColor"
        >
          <div
            class="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            :class="usp.iconBg"
          >
            <span class="material-symbols-outlined text-2xl" :class="usp.iconColor">{{ usp.icon }}</span>
          </div>
          <h3 class="font-headline-md text-primary mb-3">{{ usp.title }}</h3>
          <p class="font-body-md text-on-surface-variant">{{ usp.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  heading: string;
  paragraphs: string[];
  image: string;
  imageAlt?: string;
  badge?: {
    icon: string;
    title: string;
    subtitle: string;
    iconBg?: string;
  };
  usps?: Array<{
    title: string;
    description: string;
    icon: string;
    iconBg: string;
    iconColor: string;
    borderColor: string;
  }>;
}>();
</script>
