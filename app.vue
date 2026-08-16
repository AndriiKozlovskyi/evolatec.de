<template>
  <div class="bg-surface text-on-surface font-body-md overflow-x-clip">
    <form name="contact-form" data-netlify="true" netlify data-netlify-honeypot="bot-field" hidden>
      <input type="hidden" name="form-name" value="contact-form" />
      <input name="bot-field" type="text" />
      <input name="name" type="text" />
      <input name="email" type="email" />
      <select name="service"><option></option></select>
      <textarea name="message"></textarea>
      <input name="privacy" type="checkbox" />
    </form>
    <PageLoader />
    <TopNavBar />
    <main class="pt-20">
      <NuxtPage />
    </main>
    <Footer />
    <ClientOnly>
      <template #fallback><span class="hidden" aria-hidden="true" /></template>
      <FloatingContact />
      <SectionDotNav />
      <CookieBanner />
      <button
        v-if="hasConsented"
        @click="openPreferences"
        :title="isEnglish ? 'Cookie settings' : 'Cookie-Einstellungen'"
        class="fixed bottom-5 left-5 z-[200] w-9 h-9 rounded-full bg-surface border border-outline-variant/30 shadow-md flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all duration-200"
      >
        <span translate="no" class="notranslate material-symbols-outlined text-base">cookie</span>
      </button>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const { isEnglish } = useLanguageSwitcher();
const { hasConsented, openPreferences } = useCookieConsent();

useHead(() => ({
  htmlAttrs: { lang: isEnglish.value ? 'en' : 'de' },
}));
</script>
