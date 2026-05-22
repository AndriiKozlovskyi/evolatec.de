<template>
  <div class="bg-surface-container-low py-12 md:py-16">
    <div class="max-w-3xl mx-auto px-gutter">
      <article class="bg-white rounded-2xl border border-outline-variant/20 shadow-sm p-6 sm:p-10">

        <h1 class="font-display text-3xl md:text-4xl font-black text-on-surface mb-2">
          Legal Notice
        </h1>
        <p class="text-sm text-on-surface-variant/60 mb-8">Information in accordance with § 5 DDG</p>

        <h2 class="legal-h2">Service Provider</h2>
        <p class="legal-p">
          EvolaTec<br>
          Maksym Streltsov<br>
          Desenißstraße 14<br>
          22083 Hamburg<br>
          Germany
        </p>

        <h2 class="legal-h2">Represented by</h2>
        <p class="legal-p">Maksym Streltsov</p>

        <h2 class="legal-h2">Contact</h2>
        <p class="legal-p">
          Telephone: <a href="tel:+491756200862" class="legal-a">+49 175 6200862</a><br>
          E-mail: <a href="mailto:team@evolatec.de" class="legal-a">team@evolatec.de</a>
        </p>

        <h2 class="legal-h2">VAT ID</h2>
        <p class="legal-p">
          A VAT identification number pursuant to § 27a of the German Value Added Tax Act is currently being applied for
          and will be added here as soon as it is available.
        </p>

        <h2 class="legal-h2">Consumer Dispute Resolution / Universal Arbitration Board</h2>
        <p class="legal-p">
          We are not willing or obliged to participate in dispute resolution proceedings before a
          consumer arbitration board.
        </p>

        <h2 class="legal-h2">Privacy Policy</h2>
        <p class="legal-p">
          Information on how personal data is handled can be found in our
          <NuxtLink to="/en/privacy-policy" class="legal-a">Privacy Policy</NuxtLink>.
        </p>

        <h2 class="legal-h2">Liability for Content</h2>
        <p class="legal-p">
          As a service provider, we are responsible for our own content on these pages in accordance with § 7(1) DDG and general legislation. According to §§ 8 to 10 DDG, however, we as a service provider are not obliged to monitor transmitted or stored third-party information or to investigate circumstances indicating illegal activity.
        </p>

        <h2 class="legal-h2">Liability for Links</h2>
        <p class="legal-p">
          Our website contains links to external websites of third parties over whose content we have no influence. We therefore cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for the content of the linked pages.
        </p>

        <h2 class="legal-h2">Copyright</h2>
        <p class="legal-p">
          The content and works created by the site operators on these pages are subject to German copyright law. Reproduction, editing, distribution and any kind of use outside the limits of copyright require the written consent of the respective author or creator.
        </p>

      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { hreflangLinks } = useLanguageSwitcher();

useHead({
  title: 'Legal Notice | EvolaTec',
  htmlAttrs: { lang: 'en' },
  meta: [
    { name: 'description', content: 'Legal notice of EvolaTec — information in accordance with § 5 DDG.' },
    { name: 'robots', content: 'noindex, follow' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/en/legal-notice' },
    ...hreflangLinks.value,
  ],
});
</script>

<style scoped>
.legal-h2 {
  @apply font-display text-lg sm:text-xl font-bold text-on-surface mt-10 mb-2;
}
.legal-p {
  @apply text-sm text-on-surface-variant leading-relaxed mb-3;
}
.legal-a {
  @apply text-primary hover:underline break-words;
}
</style>
