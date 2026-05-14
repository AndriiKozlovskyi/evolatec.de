<template>
  <section data-nav-icon="checklist" :class="['py-section-padding', bg === 'container-low' ? 'bg-surface-container-low' : 'bg-surface']">
    <div class="max-w-container-max mx-auto px-gutter">

      <!-- Optional centered section title -->
      <h2
        v-if="title"
        class="font-headline-lg text-headline-lg text-primary text-center mb-stack-lg"
      >{{ title }}</h2>

      <!-- Two-column heading blocks (each with optional per-column item list) -->
      <div
        v-if="columns?.length"
        :class="['grid md:grid-cols-2 gap-stack-lg', items?.length ? 'mb-12' : '']"
      >
        <div v-for="col in columns" :key="col.heading">
          <component
            :is="title ? 'h3' : 'h2'"
            class="font-headline-lg text-headline-lg text-primary mb-6"
          >{{ col.heading }}</component>

          <p
            v-for="(para, i) in col.paragraphs"
            :key="i"
            :class="[
              'font-body-lg text-body-lg text-on-surface-variant',
              i < (col.paragraphs?.length ?? 0) - 1 ? 'mb-4' : col.items?.length ? 'mb-8' : '',
            ]"
          >{{ para }}</p>

          <div v-if="col.items?.length" class="flex flex-col gap-2">
            <div
              v-for="item in col.items"
              :key="item"
              class="flex items-center gap-3.5 rounded-xl bg-white px-5 py-3 border border-black/[0.05] shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200"
            >
              <span class="material-symbols-outlined text-primary text-lg leading-none flex-shrink-0">
                {{ col.icon || icon }}
              </span>
              <span class="text-sm font-semibold text-on-surface">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Flat item grid — centered (no columns) or full-width (below columns) -->
      <div
        v-if="items?.length"
        :class="['grid md:grid-cols-2 gap-3', !columns?.length ? 'max-w-3xl mx-auto' : '']"
      >
        <div
          v-for="item in items"
          :key="item"
          class="flex items-center gap-3.5 rounded-xl bg-white px-5 py-3.5 border border-black/[0.05] shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200"
        >
          <span class="material-symbols-outlined text-primary text-lg leading-none flex-shrink-0">
            {{ icon }}
          </span>
          <span class="text-sm font-semibold text-on-surface">{{ item }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
interface Column {
  heading: string;
  paragraphs?: string[];
  items?: string[];
  icon?: string;
}

withDefaults(
  defineProps<{
    title?: string;
    columns?: Column[];
    items?: string[];
    icon?: string;
    bg?: 'surface' | 'container-low';
  }>(),
  {
    bg: 'surface',
    icon: 'check_circle',
  }
);
</script>
