<template>
  <a
    :href="`/${slug}`"
    class="group flex flex-col bg-white rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
  >
    <!-- Image -->
    <div class="relative h-52 overflow-hidden bg-surface-container">
      <img
        v-if="article.image?.filename"
        :src="`${article.image.filename}?fit=max&w=600&h=400&q=80`"
        :alt="article.image.alt || article.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div v-else class="w-full h-full flex items-center justify-center bg-primary/10">
        <span class="material-symbols-outlined text-5xl text-primary/40">article</span>
      </div>
      <!-- Badge -->
      <span class="absolute top-3 left-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
        Blog
      </span>
    </div>

    <!-- Content -->
    <div class="flex flex-col flex-1 p-6">
      <h3 class="font-display text-lg font-bold text-on-surface leading-snug mb-2 group-hover:text-primary transition-colors">
        {{ article.title }}
      </h3>
      <p v-if="article.description" class="text-sm text-on-surface-variant leading-relaxed mb-4 line-clamp-3 flex-1">
        {{ article.description }}
      </p>
      <div class="flex items-center gap-1.5 text-sm font-semibold text-primary mt-auto">
        <span>Read more</span>
        <span class="material-symbols-outlined text-base leading-none group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </div>
    </div>
  </a>
</template>

<script setup>
defineProps({
  article: Object,
  slug: String,
})
</script>
