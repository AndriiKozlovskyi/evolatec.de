<template>
  <div>
    <section class="py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter text-center">
        <span class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-5">
          <span class="material-symbols-outlined text-sm leading-none">article</span>
          Blog
        </span>
        <h1 class="font-display text-4xl sm:text-5xl font-black text-on-surface tracking-tight leading-tight mb-4">
          Blog & Ratgeber
        </h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Tipps, Strategien und Einblicke rund um Webdesign, SEO, Online Marketing und digitales Wachstum.
        </p>
      </div>
    </section>

    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div v-if="!articles.length" class="text-center py-16 text-on-surface-variant">
          <span class="material-symbols-outlined text-5xl mb-4 block">article</span>
          <p class="font-body-lg">Noch keine Artikel veröffentlicht.</p>
        </div>
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

    <CTASection
      title="Projekt starten"
      description="Bereit für eine professionelle Website oder mehr Sichtbarkeit bei Google?"
      primary-cta="Kostenlos anfragen"
      secondary-cta="Preise ansehen"
    />
  </div>
</template>

<script setup lang="ts">
import { buildSchema, organizationSchema, websiteSchema, pageSchema } from '~/composables/schema/global'
import { breadcrumbSchema } from '~/composables/schema/service'

const { hreflangLinks } = useLanguageSwitcher()

const articles = ref([])
const storyblokApi = useStoryblokApi()

try {
  const { data } = await storyblokApi.get('cdn/stories', {
    version: useRoute().query._storyblok ? 'draft' : 'published',
    starts_with: 'blog',
    is_startpage: false,
  })
  articles.value = data?.stories ?? []
} catch {
  articles.value = []
}

const schemaMarkup = buildSchema(
  organizationSchema(),
  websiteSchema(),
  pageSchema({
    url: 'https://evolatec.de/blog',
    name: 'Blog & Ratgeber — Webdesign, SEO & Online Marketing | EvolaTec',
    description: 'Tipps, Strategien und Einblicke rund um Webdesign, SEO und Online Marketing von EvolaTec.',
  }),
  breadcrumbSchema([
    { name: 'Home', url: 'https://evolatec.de' },
    { name: 'Blog', url: 'https://evolatec.de/blog' },
  ]),
)

useHead({
  title: 'Blog & Ratgeber — Webdesign, SEO & Online Marketing | EvolaTec',
  meta: [
    { name: 'description', content: 'Tipps, Strategien und Einblicke rund um Webdesign, SEO und Online Marketing von EvolaTec.' },
    { property: 'og:title', content: 'Blog & Ratgeber | EvolaTec' },
    { property: 'og:description', content: 'Tipps, Strategien und Einblicke rund um Webdesign, SEO und digitales Wachstum.' },
    { property: 'og:type', content: 'website' },
  ],
  link: [{ rel: 'canonical', href: 'https://evolatec.de/blog' }, ...hreflangLinks.value],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
})
</script>
