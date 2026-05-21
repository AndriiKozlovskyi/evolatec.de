<template>
  <div ref="container" class="cookie-declaration">
    <p v-if="failed" class="text-sm text-on-surface-variant/60">
      Die Cookie-Übersicht konnte nicht geladen werden.
    </p>
    <p v-else-if="!ready" class="text-sm text-on-surface-variant/60">
      Die Cookie-Übersicht wird geladen …
    </p>
  </div>
</template>

<script setup lang="ts">
// Renders the auto-generated Cookiebot cookie declaration table.
// The list stays in sync with whatever cookies the consent scan finds.
const container = ref<HTMLElement>();
const ready = ref(false);
const cbid = useRuntimeConfig().public.cookiebotCbid as string;

const failed = ref(false);

onMounted(() => {
  if (!container.value || !cbid || cbid === 'YOUR-COOKIEBOT-CBID') return;
  // Avoid injecting a second script when navigating back to this page.
  if (container.value.querySelector('#CookieDeclaration')) {
    ready.value = true;
    return;
  }
  const script = document.createElement('script');
  script.id = 'CookieDeclaration';
  script.src = `https://consent.cookiebot.com/${cbid}/cd.js`;
  script.type = 'text/javascript';
  script.async = true;
  script.onload = () => { ready.value = true; };
  script.onerror = () => { failed.value = true; };
  container.value.appendChild(script);
});
</script>
