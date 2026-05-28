<template>
  <div v-if="story">
    <StoryblokComponent :blok="augmentedBlok" />
  </div>
</template>

<script setup>
const { slug } = useRoute().params
const slugPath = slug && slug.length > 0 ? slug.join('/') : 'home'

const { data: story } = await useAsyncData(`story-${slugPath}`, async () => {
  try {
    const { data } = await useStoryblokApi().get(`cdn/stories/${slugPath}`, {
      version: useRoute().query._storyblok ? 'draft' : 'published',
    })
    return data?.story ?? null
  } catch {
    return null
  }
})

const augmentedBlok = computed(() => {
  if (!story.value?.content) return null
  return {
    ...story.value.content,
    _publishedAt: story.value.first_published_at || story.value.published_at,
  }
})
</script>
