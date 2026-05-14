<template>
  <nav
    v-if="sections.length > 1"
    aria-label="Abschnittsnavigation"
    class="hidden lg:flex fixed right-10 top-1/2 -translate-y-1/2 z-40 flex-col gap-2 items-center"
  >
    <button
      v-for="(section, i) in sections"
      :key="section.id"
      type="button"
      @click="scrollTo(i)"
      :aria-label="`Zu Abschnitt: ${section.label}`"
      :aria-current="i === activeIndex ? 'true' : undefined"
      class="group relative flex items-center justify-center w-14 h-6 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
    >
      <span
        :class="[
          'block rounded-full transition-all duration-300 ease-out',
          i === activeIndex
            ? 'w-2.5 h-2.5 bg-primary shadow-[0_0_0_3px_rgba(0,44,80,0.12)]'
            : 'w-1.5 h-1.5 bg-on-surface-variant/40 group-hover:bg-primary group-hover:scale-150',
        ]"
      />
      <span
        class="pointer-events-none absolute right-full mr-2 px-2.5 py-1 rounded-md bg-slate-900 text-white text-xs font-medium whitespace-nowrap shadow-lg opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
      >
        {{ section.label }}
      </span>
    </button>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue';

type SectionEntry = { id: string; label: string; icon: string | null; el: HTMLElement };

const sections = ref<SectionEntry[]>([]);
const activeIndex = ref(0);
const route = useRoute();

let observer: IntersectionObserver | null = null;
let mutationObserver: MutationObserver | null = null;
let rescanTimer: ReturnType<typeof setTimeout> | null = null;

function deriveLabel(el: HTMLElement, index: number): string {
  const explicit = el.getAttribute('data-nav-label');
  if (explicit) return explicit;
  const heading = el.querySelector('h1, h2, h3') as HTMLElement | null;
  const text = heading?.textContent?.trim();
  if (text) return text.length > 40 ? text.slice(0, 38).trim() + '…' : text;
  return `Abschnitt ${index + 1}`;
}

function scanSections() {
  const main = document.querySelector('main');
  if (!main) {
    sections.value = [];
    return;
  }
  const found = Array.from(main.querySelectorAll<HTMLElement>(':scope > section, :scope > div > section'));
  sections.value = found.map((el, i) => {
    if (!el.id) el.id = `section-${i + 1}`;
    return { id: el.id, label: deriveLabel(el, i), icon: el.getAttribute('data-nav-icon') || null, el };
  });
  attachObserver();
}

function attachObserver() {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
  if (!sections.value.length) return;
  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible.length) {
        const idx = sections.value.findIndex(s => s.el === visible[0].target);
        if (idx !== -1) activeIndex.value = idx;
      }
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
  );
  sections.value.forEach(s => observer!.observe(s.el));
}

function scrollTo(i: number) {
  const target = sections.value[i]?.el;
  if (!target) return;
  const headerOffset = 80;
  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top, behavior: prefersReduced ? 'auto' : 'smooth' });
  activeIndex.value = i;
}

function scheduleRescan() {
  if (rescanTimer) clearTimeout(rescanTimer);
  rescanTimer = setTimeout(scanSections, 50);
}

onMounted(() => {
  nextTick(scanSections);
  const main = document.querySelector('main');
  if (main) {
    mutationObserver = new MutationObserver(scheduleRescan);
    mutationObserver.observe(main, { childList: true, subtree: true });
  }
  window.addEventListener('resize', scheduleRescan);
});

watch(() => route.path, () => {
  activeIndex.value = 0;
  nextTick(() => scheduleRescan());
});

onBeforeUnmount(() => {
  observer?.disconnect();
  mutationObserver?.disconnect();
  if (rescanTimer) clearTimeout(rescanTimer);
  window.removeEventListener('resize', scheduleRescan);
});
</script>
