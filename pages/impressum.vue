<template>
  <div class="bg-surface-container-low py-12 md:py-16">
    <div class="max-w-3xl mx-auto px-gutter">
      <article class="bg-white rounded-2xl border border-outline-variant/20 shadow-sm p-6 sm:p-10">

        <h1 class="font-display text-3xl md:text-4xl font-black text-on-surface mb-2">
          Impressum
        </h1>
        <p class="text-sm text-on-surface-variant/60 mb-8">Angaben gemäß § 5 DDG</p>

        <h2 class="legal-h2">Diensteanbieter</h2>
        <p class="legal-p">
          EvolaTec<br>
          Maksym Streltsov<br>
          Desenißstraße 14<br>
          22083 Hamburg<br>
          Deutschland
        </p>

        <h2 class="legal-h2">Vertreten durch</h2>
        <p class="legal-p">Maksym Streltsov</p>

        <h2 class="legal-h2">Kontakt</h2>
        <p class="legal-p">
          Telefon: <a href="tel:+491756200862" class="legal-a">+49 175 6200862</a><br>
          E-Mail: <a href="mailto:team@evolatec.de" class="legal-a">team@evolatec.de</a>
        </p>

        <h2 class="legal-h2">Umsatzsteuer-ID</h2>
        <p class="legal-p">
          Eine Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz wird derzeit beantragt
          und an dieser Stelle ergänzt, sobald sie vorliegt.
        </p>

        <h2 class="legal-h2">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
        <p class="legal-p">
          Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h2 class="legal-h2">Datenschutzerklärung</h2>
        <p class="legal-p">
          Informationen zum Umgang mit personenbezogenen Daten finden Sie in unserer
          <NuxtLink to="/datenschutz" class="legal-a">Datenschutzerklärung</NuxtLink>.
        </p>

        <h2 class="legal-h2">Haftung für Inhalte</h2>
        <p class="legal-p">
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach
          den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter
          jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
          oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>

        <h2 class="legal-h2">Haftung für Links</h2>
        <p class="legal-p">
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
          Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich.
        </p>

        <h2 class="legal-h2">Urheberrecht</h2>
        <p class="legal-p">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
          dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
          des jeweiligen Autors bzw. Erstellers.
        </p>

      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Impressum | EvolaTec',
  meta: [
    { name: 'description', content: 'Impressum der EvolaTec — Angaben gemäß § 5 DDG.' },
    { name: 'robots', content: 'noindex, follow' },
  ],
  link: [
    { rel: 'canonical', href: 'https://evolatec.de/impressum' },
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
