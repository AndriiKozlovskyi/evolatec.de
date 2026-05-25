<template>
  <div class="bg-surface">
    <!-- TOP CTA: tabs + content right at the top -->
    <section class="pt-8 md:pt-14 pb-8 md:pb-12">
      <div class="max-w-3xl mx-auto px-gutter">
        <!-- Compact heading above tabs -->
        <div class="text-center mb-6">
          <h1 class="font-display text-2xl sm:text-3xl md:text-4xl font-black text-on-surface leading-tight">
            Wie möchten Sie starten?
          </h1>
          <p class="text-sm sm:text-base text-on-surface-variant mt-2">
            Termin buchen oder Anfrage schreiben — Sie entscheiden.
          </p>
        </div>

        <!-- Tabs -->
        <div class="flex bg-surface-container-low rounded-full p-1 mb-6 max-w-md mx-auto">
          <button
            @click="hasConsented ? (tab = 'call') : focusBanner()"
            :class="[
              'flex-1 py-2.5 px-3 rounded-full font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 min-h-[44px]',
              tab === 'call' ? 'bg-primary text-on-primary shadow-md' : 'text-on-surface-variant hover:text-primary',
            ]"
          >
            <span class="material-symbols-outlined text-lg">event</span>
            Termin buchen
          </button>
          <button
            @click="tab = 'form'"
            :class="[
              'flex-1 py-2.5 px-3 rounded-full font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 min-h-[44px]',
              tab === 'form' ? 'bg-primary text-on-primary shadow-md' : 'text-on-surface-variant hover:text-primary',
            ]"
          >
            <span class="material-symbols-outlined text-lg">mail</span>
            Anfrage senden
          </button>
        </div>

        <!-- TERMIN tab -->
        <div v-show="tab === 'call'" class="bg-white rounded-2xl shadow-md border border-outline-variant/20 p-3 sm:p-4 animate-fade-in-up">
          <!-- Cal.com inline widget -->
          <div class="rounded-xl overflow-hidden border border-outline-variant/30 bg-surface-container-low">
            <iframe
              v-if="hasConsented"
              :src="calComEmbedUrl"
              title="Termin buchen"
              loading="lazy"
              class="w-full h-[620px] sm:h-[680px] md:h-[720px] border-0 block"
              allow="payment"
            />
            <div
              v-else
              class="flex flex-col items-center justify-center gap-3 p-10 text-center h-64 cursor-pointer"
              @click="focusBanner"
            >
              <span class="material-symbols-outlined text-primary text-4xl">cookie</span>
              <p class="text-sm font-bold text-on-surface">Cookie-Einstellungen erforderlich</p>
              <p class="text-xs text-on-surface-variant max-w-xs leading-relaxed">
                Bitte legen Sie zunächst Ihre
                <button type="button" @click.stop="focusBanner" class="text-primary font-semibold underline underline-offset-2">Cookie-Einstellungen</button>
                fest, um einen Termin buchen zu können.
              </p>
            </div>
          </div>

          <!-- Fallback contact channels under the widget -->
          <div class="grid grid-cols-2 gap-2 mt-3">
            <a
              href="tel:+491756200862"
              class="group flex items-center gap-2 bg-surface-container-low rounded-lg p-3 hover:bg-primary/5 transition-colors"
            >
              <span class="material-symbols-outlined text-primary text-lg">phone</span>
              <span class="text-xs sm:text-sm font-semibold text-on-surface truncate">Anrufen</span>
            </a>
            <a
              href="https://wa.me/491756200862"
              target="_blank"
              rel="noopener"
              class="group flex items-center gap-2 bg-surface-container-low rounded-lg p-3 hover:bg-primary/5 transition-colors"
            >
              <span class="material-symbols-outlined text-primary text-lg">chat</span>
              <span class="text-xs sm:text-sm font-semibold text-on-surface">WhatsApp</span>
            </a>
          </div>

          <p class="text-xs text-on-surface-variant/70 text-center mt-3">
            Widget lädt nicht?
            <a :href="calComUrl" target="_blank" rel="noopener" class="text-primary font-semibold hover:underline">In neuem Tab öffnen</a>
          </p>
        </div>

        <!-- FORM tab -->
        <div v-show="tab === 'form'" class="bg-white rounded-2xl shadow-md border border-outline-variant/20 p-5 sm:p-7 animate-fade-in-up">
          <ContactForm />
        </div>
      </div>
    </section>

    <!-- TEXT block — kostenlose Erstberatung explainer (now below the CTA) -->
    <section class="bg-white border-y border-outline-variant/30 py-10 md:py-14">
      <div class="max-w-3xl mx-auto px-gutter text-center">
        <span class="inline-block text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3">
          Kostenlose Erstberatung
        </span>
        <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-black text-on-surface leading-tight mb-4">
          Rückmeldung innerhalb von 24 Stunden
        </h2>
        <p class="text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
          Erzählen Sie uns kurz von Ihrem Projekt. Wir prüfen Ihre Anfrage und melden uns mit einem
          <span class="text-on-surface font-semibold">unverbindlichen Angebot</span>
          oder Terminvorschlägen für ein Gespräch — egal, ob Landingpage, Firmenwebsite oder Online-Shop.
        </p>

        <div class="flex flex-wrap gap-2 justify-center mt-5">
          <span v-for="chip in trustChips" :key="chip" class="inline-flex items-center gap-1.5 bg-primary/5 border border-primary/10 rounded-full px-3 py-1 text-xs sm:text-sm text-on-surface font-medium">
            <span class="material-symbols-outlined text-base text-primary">check</span>
            {{ chip }}
          </span>
        </div>
      </div>
    </section>

    <!-- Price calculator shortcut -->
    <section class="py-8 md:py-12">
      <div class="max-w-3xl mx-auto px-gutter">
        <a
          href="/webseite-kosten-kalkulator"
          class="flex items-center justify-between gap-4 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl p-4 sm:p-5 hover:shadow-lg transition-shadow duration-200 group"
        >
          <div class="flex items-center gap-4 min-w-0">
            <div class="w-11 h-11 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
              <span class="material-symbols-outlined">calculate</span>
            </div>
            <div class="min-w-0">
              <p class="text-xs uppercase tracking-wider text-white/70 font-semibold">Schnell-Check</p>
              <p class="text-sm sm:text-base font-bold">Berechnen Sie sofort Ihren Preis</p>
            </div>
          </div>
          <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </a>
      </div>
    </section>

    <!-- FAQ -->
    <FAQSection title="Häufig gestellte Fragen" :faqs="faqs" />
  </div>
</template>

<script setup lang="ts">
import { buildSchema, organizationSchema, websiteSchema, pageSchema } from '~/composables/schema/global'
import { breadcrumbSchema, faqSchema } from '~/composables/schema/service'
const { hreflangLinks } = useLanguageSwitcher();
import { ref } from 'vue';

const faqs = [
  {
    question: 'Was passiert nach meiner Kontaktanfrage?',
    answer:
      'Wir prüfen Ihre Anfrage und melden uns innerhalb von 24 Stunden mit einem unverbindlichen Angebot oder Terminvorschlägen für ein Erstgespräch. Im Gespräch klären wir Ihre Ziele, Anforderungen und Budget – anschließend erhalten Sie ein detailliertes Festpreis-Angebot.',
  },
  {
    question: 'Ist die Erstberatung wirklich kostenlos und unverbindlich?',
    answer:
      'Ja, das Erstgespräch und das daraus resultierende Angebot sind komplett kostenlos und unverbindlich. Sie gehen keinerlei Verpflichtung ein.',
  },
  {
    question: 'Kann ich mit einem kleinen Budget bei EvolaTec starten?',
    answer:
      'Ja, Landingpages starten ab 500€, Firmenwebsites ab 1.500€ und SEO Audits ab 100€. Mit unserem Preisrechner erhalten Sie sofort eine erste Schätzung für Ihr Projekt.',
  },
  {
    question: 'Wie schnell antwortet EvolaTec auf Anfragen?',
    answer:
      'Wir antworten auf Kontaktanfragen meist innerhalb weniger Stunden, spätestens jedoch innerhalb von 24 Stunden an Werktagen. Für dringende Anliegen erreichen Sie uns auch direkt per WhatsApp.',
  },
  {
    question: 'Wann sind Sie erreichbar?',
    answer:
      'Wir sind Montag bis Freitag von 9–17 Uhr erreichbar. Für dringende Anfragen außerhalb dieser Zeiten schreiben Sie uns einfach auf WhatsApp.',
  },
  {
    question: 'In welchen Regionen ist EvolaTec aktiv?',
    answer:
      'EvolaTec arbeitet ortsunabhängig für Kunden in ganz Deutschland, Österreich und der Schweiz. Die meisten Projekte werden komplett remote über Video-Calls, E-Mail und Projektmanagement-Tools abgewickelt.',
  },
  {
    question: 'Bieten Sie Festpreise oder werden Kosten nach Aufwand abgerechnet?',
    answer:
      'Wir arbeiten mit transparenten Festpreis-Angeboten. Sie wissen vor Projektstart genau, was Ihr Projekt kostet – es gibt keine überraschenden Zusatzkosten. Stundenbasiert arbeiten wir nur bei Beratung oder kleineren Sonderaufgaben (ab 90€/Stunde).',
  },
];

const schemaMarkup = buildSchema(
  organizationSchema(),
  websiteSchema(),
  pageSchema({ url: 'https://evolatec.de/kontakt', name: 'Kontakt – Kostenlose Erstberatung | EvolaTec', description: 'Kostenlose Erstberatung für Ihre Website oder Online Shop. Termin buchen oder Anfrage schreiben — Antwort innerhalb von 24 Stunden.' }),
  breadcrumbSchema([{ name: 'Home', url: 'https://evolatec.de' }, { name: 'Kontakt', url: 'https://evolatec.de/kontakt' }]),
  faqSchema(faqs),
);

useHead({
  title: 'Kontakt – Kostenlose Erstberatung | EvolaTec',
  meta: [
    { name: 'description', content: 'Kostenlose Erstberatung für Ihre Website oder Online Shop. Termin buchen oder Anfrage schreiben — Antwort innerhalb von 24 Stunden.' },
  ],
  link: [{ rel: 'canonical', href: 'https://evolatec.de/kontakt' }, ...hreflangLinks.value],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schemaMarkup) }],
});

const { hasConsented, focusBanner } = useCookieConsent();
const tab = ref<'call' | 'form'>('call');

const calComUrl = 'https://cal.eu/evolatec/15min';
const calComEmbedUrl = 'https://cal.eu/evolatec/15min?embed=true&layout=month_view&theme=light&hideEventTypeDetails=false';

const trustChips = [
  'Unverbindlich',
  'Antwort in 24h',
  'DSGVO-konform',
];

</script>
