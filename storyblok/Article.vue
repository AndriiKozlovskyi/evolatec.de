<template>
  <article v-editable="blok" class="pt-20 pb-section-padding bg-surface min-h-screen">

    <!-- Hero image -->
    <div v-if="blok.image?.filename" class="relative w-full h-[420px] md:h-[520px] overflow-hidden">
      <img
        :src="`${blok.image.filename}?fit=max&w=1400&h=800&q=80`"
        :alt="blok.image.alt || blok.title"
        class="w-full h-full object-cover"
        loading="eager"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-surface"></div>
    </div>

    <!-- Article body -->
    <div class="max-w-3xl mx-auto px-gutter" :class="blok.image?.filename ? '-mt-12 relative z-10' : 'pt-16'">

      <!-- Badge -->
      <span class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-6">
        <span class="material-symbols-outlined text-sm leading-none">article</span>
        Blog
      </span>

      <!-- Title -->
      <h1 class="font-display text-3xl sm:text-4xl md:text-5xl font-black text-on-surface leading-tight tracking-tight mb-5">
        {{ blok.title }}
      </h1>

      <!-- Description / excerpt -->
      <p v-if="blok.description" class="text-lg text-on-surface-variant leading-relaxed mb-6">
        {{ blok.description }}
      </p>

      <!-- Author + meta -->
      <div class="flex items-center gap-3 pb-8 mb-8 border-b border-outline-variant/30">
        <div class="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-sm text-primary">person</span>
        </div>
        <span class="text-sm text-on-surface-variant">
          By <strong class="text-on-surface font-semibold">{{ blok.author }}</strong>
        </span>
      </div>

      <!-- Article content -->
      <div v-html="blok.content" class="article-body"></div>

    </div>
  </article>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style scoped>
.article-body :deep(h2) {
  font-size: 1.75rem;
  font-weight: 800;
  color: #1c1b25;
  letter-spacing: -0.025em;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.25;
}
.article-body :deep(h3) {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1c1b25;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}
.article-body :deep(p) {
  color: #48444f;
  line-height: 1.8;
  margin-bottom: 1.25rem;
  font-size: 1.0625rem;
}
.article-body :deep(a) {
  color: #6d46b1;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.article-body :deep(a:hover) {
  color: #5b21b6;
}
.article-body :deep(strong) {
  color: #1c1b25;
  font-weight: 700;
}
.article-body :deep(ul),
.article-body :deep(ol) {
  color: #48444f;
  padding-left: 1.5rem;
  margin-bottom: 1.25rem;
  line-height: 1.8;
}
.article-body :deep(li) {
  margin-bottom: 0.4rem;
}
.article-body :deep(blockquote) {
  border-left: 3px solid #6d46b1;
  padding-left: 1.25rem;
  margin: 1.75rem 0;
  color: #48444f;
  font-style: italic;
}
.article-body :deep(code) {
  background: #ede9f7;
  color: #6d46b1;
  border-radius: 0.25rem;
  padding: 0.15em 0.4em;
  font-size: 0.9em;
}
.article-body :deep(pre) {
  background: #1c1b25;
  color: #f3f0fa;
  border-radius: 0.5rem;
  padding: 1.25rem 1.5rem;
  overflow-x: auto;
  margin-bottom: 1.5rem;
}
.article-body :deep(pre code) {
  background: transparent;
  color: inherit;
  padding: 0;
}
.article-body :deep(hr) {
  border-color: #cac4d6;
  margin: 2.5rem 0;
}
.article-body :deep(img) {
  border-radius: 0.75rem;
  max-width: 100%;
  height: auto;
  margin: 1.5rem 0;
}
.article-body :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1.75rem 0;
  font-size: 0.9375rem;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid #e2dff0;
}
.article-body :deep(thead) {
  background: #f3f0fa;
}
.article-body :deep(th) {
  text-align: left;
  padding: 0.75rem 1rem;
  font-weight: 700;
  color: #1c1b25;
  font-size: 0.8125rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  border-bottom: 2px solid #e2dff0;
}
.article-body :deep(td) {
  padding: 0.75rem 1rem;
  color: #48444f;
  border-bottom: 1px solid #ede9f7;
  vertical-align: top;
  line-height: 1.5;
}
.article-body :deep(tr:last-child td) {
  border-bottom: none;
}
.article-body :deep(tr:nth-child(even)) {
  background: #f9f7fd;
}
.article-body :deep(td code),
.article-body :deep(th code) {
  font-size: 0.8125rem;
}
.article-body :deep(ul) {
  list-style-type: disc;
}
.article-body :deep(ol) {
  list-style-type: decimal;
}
</style>
