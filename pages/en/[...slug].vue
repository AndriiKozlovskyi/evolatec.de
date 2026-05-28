<template>
  <div v-if="story">
    <StoryblokComponent :blok="story.content" />
  </div>
</template>

<script setup>
const { slug } = useRoute().params
const slugPath = slug && slug.length > 0 ? `en/${slug.join('/')}` : 'en/home'

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
</script>
