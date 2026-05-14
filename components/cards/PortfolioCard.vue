<template>
  <div
    :class="[
      'group relative overflow-hidden rounded-xl ambient-shadow',
      isLarge ? 'md:col-span-2 h-[400px]' : 'h-[400px]',
    ]"
  >
    <NuxtPicture
      :src="image"
      :alt="title"
      format="avif,webp"
      sizes="xs:100vw sm:100vw md:50vw lg:50vw xl:50vw xxl:50vw"
      :width="900"
      :height="600"
      :img-attrs="{
        loading: 'lazy',
        decoding: 'async',
        class: 'absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110',
      }"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
    <div class="absolute bottom-0 left-0 p-8">
      <h3 class="font-display text-headline-lg text-white mb-2">{{ title }}</h3>
      <p class="text-white/80 max-w-md">{{ description }}</p>
      <slot name="action" />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    image: string;
    title: string;
    description: string;
    isLarge?: boolean;
  }>(),
  {
    isLarge: false,
  }
);
</script>
