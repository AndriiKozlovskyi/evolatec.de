<template>
  <div class="bg-surface-container-low">

    <!-- Header band -->
    <section class="bg-primary text-on-primary">
      <div class="max-w-3xl mx-auto px-gutter py-14 md:py-20 text-center">
        <div class="inline-flex w-14 h-14 rounded-2xl bg-white/10 items-center justify-center mb-5">
          <span translate="no" class="notranslate material-symbols-outlined text-[1.9rem]">verified_user</span>
        </div>
        <h1 class="font-display text-3xl md:text-4xl font-black mb-3">Impressum</h1>
        <p class="text-on-primary/70 max-w-lg mx-auto leading-relaxed">
          Anbieterkennzeichnung gemäß § 5 Digitale-Dienste-Gesetz (DDG).
        </p>
      </div>
    </section>

    <!-- Content -->
    <div class="max-w-3xl mx-auto px-gutter pb-16 md:pb-24 -mt-10">
      <article class="bg-white rounded-2xl border border-outline-variant/20 shadow-sm p-6 sm:p-10">

        <!-- Provider card -->
        <div class="rounded-2xl bg-surface-container-low p-6 sm:p-7 mb-10">
          <span class="text-xs font-bold uppercase tracking-[0.15em] text-primary/60">Diensteanbieter</span>
          <p class="font-display text-xl font-black text-on-surface mt-2">EvolaTec</p>
          <p class="text-sm text-on-surface-variant leading-relaxed mt-1">
            Inhaber: Maksym Streltsov<br>
            Desenißstraße 14<br>
            22083 Hamburg, Deutschland
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
                <span class="block text-[0.7rem] uppercase tracking-wide text-on-surface-variant/60 font-bold">Telefon</span>
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

        <h2 class="legal-h2">Vertreten durch</h2>
        <p class="legal-p">Maksym Streltsov, als Inhaber des Einzelunternehmens EvolaTec.</p>

        <h2 class="legal-h2">Umsatzsteuer-Identifikationsnummer</h2>
        <p class="legal-p">
          Eine Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz wird derzeit beantragt
          und an dieser Stelle ergänzt, sobald sie vorliegt.
        </p>

        <h2 class="legal-h2">Verbraucherstreitbeilegung</h2>
        <p class="legal-p">
          Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen. Die Plattform der EU-Kommission zur
          Online-Streitbeilegung wurde zum 20. Juli 2025 eingestellt.
        </p>

        <h2 class="legal-h2">Redaktionell verantwortlich</h2>
        <p class="legal-p">
          Maksym Streltsov<br>
          Desenißstraße 14, 22083 Hamburg
        </p>

        <h2 class="legal-h2">Haftung für Inhalte</h2>
        <p class="legal-p">
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach
          den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter
          jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
          oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
          allgemeinen Gesetzen bleiben hiervon unberührt.
        </p>

        <h2 class="legal-h2">Haftung für Links</h2>
        <p class="legal-p">
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
          Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>

        <h2 class="legal-h2">Urheberrecht</h2>
        <p class="legal-p">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
          dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
          des jeweiligen Autors bzw. Erstellers.
        </p>

        <!-- Privacy link callout -->
        <div class="mt-12 rounded-2xl bg-surface-container-low p-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <span class="w-12 h-12 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <span translate="no" class="notranslate material-symbols-outlined text-2xl">shield_person</span>
          </span>
          <div class="flex-1">
            <p class="font-bold text-on-surface">Wie wir mit Ihren Daten umgehen</p>
            <p class="text-sm text-on-surface-variant">Alle Details finden Sie in unserer Datenschutzerklärung.</p>
          </div>
          <NuxtLink
            to="/datenschutz"
            class="inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-bold text-sm rounded-full px-5 py-3 hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            Datenschutz ansehen
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
  title: 'Impressum | EvolaTec',
  meta: [
    { name: 'description', content: 'Impressum der EvolaTec — Anbieterkennzeichnung gemäß § 5 DDG.' },
    { name: 'robots', content: 'noindex, follow' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/impressum' },
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
