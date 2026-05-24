<template>
  <NuxtLink
    :to="'/' + slug"
    v-editable="article"
    class="card-premium group flex flex-col w-full h-full overflow-hidden text-left no-underline"
  >
    <!-- Image -->
    <div class="relative overflow-hidden rounded-t-2xl">
      <img
        :src="article.image"
        :alt="article.image.alt"
        class="w-full h-48 xl:h-60 object-cover pointer-events-none transition-transform duration-300 group-hover:scale-105"
      />
      <!-- subtle orange tint overlay on hover -->
      <div class="absolute inset-0 bg-[#f05b04] opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
    </div>

    <!-- Content -->
    <div class="flex flex-col flex-1 p-5">
      <!-- Author row -->
      <div class="flex items-center gap-2 mb-3">
        <span class="icon-dot flex-shrink-0"></span>
        <span class="text-xs font-semibold uppercase tracking-widest" style="color: var(--accent);">{{ article.author }}</span>
      </div>

      <h2 class="text-lg font-black leading-snug mb-3 transition-colors duration-200 group-hover:text-[#f05b04]" style="color: var(--text-1); letter-spacing: -0.02em;">
        {{ article.title }}
      </h2>

      <p class="text-sm leading-relaxed line-clamp-3 flex-1" style="color: var(--text-2);">
        {{ article.description }}
      </p>

      <!-- Read more indicator -->
      <div class="mt-4 flex items-center gap-1.5 text-xs font-semibold" style="color: var(--accent);">
        <span>Read more</span>
        <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({ article: Object, slug: String })
</script>