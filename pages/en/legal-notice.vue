<template>
  <div class="bg-surface-container-low">

    <!-- Header band -->
    <section class="bg-primary text-on-primary">
      <div class="max-w-3xl mx-auto px-gutter py-14 md:py-20 text-center">
        <div class="inline-flex w-14 h-14 rounded-2xl bg-white/10 items-center justify-center mb-5">
          <span translate="no" class="notranslate material-symbols-outlined text-[1.9rem]">verified_user</span>
        </div>
        <h1 class="font-display text-3xl md:text-4xl font-black mb-3">Legal Notice</h1>
        <p class="text-on-primary/70 max-w-lg mx-auto leading-relaxed">
          Provider identification in accordance with § 5 Digital Services Act (DDG).
        </p>
      </div>
    </section>

    <!-- Content -->
    <div class="max-w-3xl mx-auto px-gutter pb-16 md:pb-24 -mt-10">
      <article class="bg-white rounded-2xl border border-outline-variant/20 shadow-sm p-6 sm:p-10">

        <!-- Provider card -->
        <div class="rounded-2xl bg-surface-container-low p-6 sm:p-7 mb-10">
          <span class="text-xs font-bold uppercase tracking-[0.15em] text-primary/60">Service Provider</span>
          <p class="font-display text-xl font-black text-on-surface mt-2">EvolaTec</p>
          <p class="text-sm text-on-surface-variant leading-relaxed mt-1">
            Owner: Maksym Streltsov<br>
            Desenißstraße 14<br>
            22083 Hamburg, Germany
          </p>

          <div class="grid sm:grid-cols-2 gap-3 mt-5 pt-5 border-t border-outline-variant/20">
            <a
              href="tel:+491756200862"
              class="flex items-center gap-3 rounded-xl bg-white border border-outline-variant/30 p-3.5 hover:border-primary/40 transition-colors group"
            >
              <span class="w-9 h-9 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span translate="no" class="notranslate material-symbols-outlined text-lg">phone</span>
              </span>
              <span>
                <span class="block text-[0.7rem] uppercase tracking-wide text-on-surface-variant/60 font-bold">Phone</span>
                <span class="block text-sm font-semibold text-on-surface">+49 175 6200862</span>
              </span>
            </a>
            <a
              href="mailto:team@evolatec.de"
              class="flex items-center gap-3 rounded-xl bg-white border border-outline-variant/30 p-3.5 hover:border-primary/40 transition-colors group"
            >
              <span class="w-9 h-9 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span translate="no" class="notranslate material-symbols-outlined text-lg">mail</span>
              </span>
              <span>
                <span class="block text-[0.7rem] uppercase tracking-wide text-on-surface-variant/60 font-bold">E-Mail</span>
                <span class="block text-sm font-semibold text-on-surface">team@evolatec.de</span>
              </span>
            </a>
          </div>
        </div>

        <h2 class="legal-h2">Represented by</h2>
        <p class="legal-p">Maksym Streltsov, as owner of the sole proprietorship EvolaTec.</p>

        <h2 class="legal-h2">VAT Identification Number</h2>
        <p class="legal-p">
          A VAT identification number pursuant to § 27a of the German Value Added Tax Act is currently
          being applied for and will be added here as soon as it is available.
        </p>

        <h2 class="legal-h2">Consumer Dispute Resolution</h2>
        <p class="legal-p">
          We are not willing or obliged to participate in dispute resolution proceedings before a
          consumer arbitration board. The EU Commission's online dispute resolution platform was
          discontinued on 20 July 2025.
        </p>

        <h2 class="legal-h2">Editorial Responsibility</h2>
        <p class="legal-p">
          Maksym Streltsov<br>
          Desenißstraße 14, 22083 Hamburg
        </p>

        <h2 class="legal-h2">Liability for Content</h2>
        <p class="legal-p">
          As a service provider, we are responsible for our own content on these pages in accordance
          with § 7(1) DDG and general legislation. According to §§ 8 to 10 DDG, however, we as a
          service provider are not obliged to monitor transmitted or stored third-party information
          or to investigate circumstances indicating illegal activity. Obligations to remove or block
          the use of information under general legislation remain unaffected by this.
        </p>

        <h2 class="legal-h2">Liability for Links</h2>
        <p class="legal-p">
          Our website contains links to external websites of third parties over whose content we have
          no influence. We therefore cannot accept any liability for this external content. The
          respective provider or operator of the linked pages is always responsible for the content
          of the linked pages. Upon becoming aware of legal violations, we will remove such links
          immediately.
        </p>

        <h2 class="legal-h2">Copyright</h2>
        <p class="legal-p">
          The content and works created by the site operators on these pages are subject to German
          copyright law. Reproduction, editing, distribution and any kind of use outside the limits
          of copyright require the written consent of the respective author or creator.
        </p>

        <!-- Privacy link callout -->
        <div class="mt-12 rounded-2xl bg-surface-container-low p-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <span class="w-12 h-12 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <span translate="no" class="notranslate material-symbols-outlined text-2xl">shield_person</span>
          </span>
          <div class="flex-1">
            <p class="font-bold text-on-surface">How we handle your data</p>
            <p class="text-sm text-on-surface-variant">All details can be found in our Privacy Policy.</p>
          </div>
          <NuxtLink
            to="/en/privacy-policy"
            class="inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-bold text-sm rounded-full px-5 py-3 hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            View Privacy Policy
            <span translate="no" class="notranslate material-symbols-outlined text-base">arrow_forward</span>
          </NuxtLink>
        </div>

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
    { name: 'description', content: 'Legal notice of EvolaTec — provider identification in accordance with § 5 DDG.' },
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
  @apply font-display text-lg sm:text-xl font-bold text-on-surface mt-9 mb-2;
}
.legal-p {
  @apply text-sm text-on-surface-variant leading-relaxed mb-3;
}
</style>
