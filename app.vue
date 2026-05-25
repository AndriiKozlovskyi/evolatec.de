<template>
  <div class="bg-surface text-on-surface font-body-md overflow-x-hidden">
    <form name="contact-form" data-netlify="true" netlify data-netlify-honeypot="bot-field" hidden>
      <input type="hidden" name="form-name" value="contact-form" />
      <input name="bot-field" type="text" />
      <input name="name" type="text" />
      <input name="email" type="email" />
      <select name="service"><option></option></select>
      <textarea name="message"></textarea>
      <input name="privacy" type="checkbox" />
    </form>
    <TopNavBar />
    <main class="pt-20">
      <NuxtPage />
    </main>
    <Footer />
    <FloatingContact />
    <SectionDotNav />
    <CookieBanner />
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';

const route = useRoute();
const { redirectToPreferred, isEnglish } = useLanguageSwitcher();

useHead(() => ({
  htmlAttrs: { lang: isEnglish.value ? 'en' : 'de' },
}));

onMounted(redirectToPreferred);
watch(() => route.path, redirectToPreferred);
</script>
