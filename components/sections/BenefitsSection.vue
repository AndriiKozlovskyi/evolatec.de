<template>
  <section class="py-section-padding bg-white text-on-surface">
    <div class="max-w-container-max mx-auto px-gutter">
      <h2 class="font-display text-display text-[2.5rem] md:text-[3rem] mb-stack-lg text-center">{{ title }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-stack-md">

        <!-- Image card variant -->
        <template v-if="hasImages">
          <div
            v-for="benefit in benefits"
            :key="benefit.title"
            class="group relative rounded-3xl overflow-hidden h-72 cursor-pointer"
            :class="benefit.bg"
          >
            <img
              :src="benefit.image"
              alt=""
              class="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500 scale-105 group-hover:scale-110 transition-transform"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div class="relative h-full flex flex-col justify-between p-6">
              <div class="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span class="material-symbols-outlined text-white text-2xl">{{ benefit.icon }}</span>
              </div>
              <div>
                <h3 class="font-headline-md text-white mb-1">{{ benefit.title }}</h3>
                <p class="text-white/70 text-sm font-body-md">{{ benefit.description }}</p>
              </div>
            </div>
          </div>
        </template>

        <!-- Default glass card variant -->
        <template v-else>
          <div
            v-for="benefit in benefits"
            :key="benefit.title"
            class="flex flex-col border border-black/20 items-center text-center p-8 rounded-xl glass-card backdrop-blur-sm hover:shadow-lg transition-all duration-300 group"
          >
            <span class="material-symbols-outlined text-[3.5rem] mb-4 text-primary group-hover:scale-110 transition-transform duration-300">{{ benefit.icon }}</span>
            <h3 class="text-headline-md font-bold mb-3">{{ benefit.title }}</h3>
            <p class="text-body-md">{{ benefit.description }}</p>
          </div>
        </template>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  benefits: Array<{
    icon: string;
    title: string;
    description: string;
    image?: string;
    bg?: string;
  }>;
}>();

const hasImages = computed(() => props.benefits.some(b => b.image));
</script>
