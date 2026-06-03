<template>
  <section v-editable="blok" class="py-section-padding bg-surface">
    <div class="max-w-container-max mx-auto px-gutter">

      <!-- Section header -->
      <div class="text-center mb-12">
        <span class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-5">
          <span class="material-symbols-outlined text-sm leading-none">article</span>
          Blog
        </span>
        <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-on-surface tracking-tight leading-tight">
          {{ blok.headline }}
        </h2>
      </div>

      <!-- Empty state -->
      <div v-if="!articles.length" class="text-center py-16 text-on-surface-variant">
        <span class="material-symbols-outlined text-5xl mb-4 block">article</span>
        <p>No articles yet.</p>
      </div>

      <!-- Article grid -->
      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ArticleCard
          v-for="article in articles"
          :key="article.uuid"
          :article="article.content"
          :slug="article.full_slug"
        />
      </div>

    </div>
  </section>
</template>

<script setup>
defineProps({ blok: Object })

const articles = ref([])
const storyblokApi = useStoryblokApi()

try {
  const { data } = await storyblokApi.get('cdn/stories', {
    version: useRoute().query._storyblok ? 'draft' : 'published',
    starts_with: 'blog',
    is_startpage: false,
  })
  articles.value = data?.stories ?? []
} catch (error) {
  console.error('Failed to fetch Storyblok articles:', error)
  articles.value = []
}
</script>
