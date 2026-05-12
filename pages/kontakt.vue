<template>
  <div>
    <!-- Hero -->
    <section class="relative bg-gradient-to-br from-primary via-primary to-primary-container text-on-primary overflow-hidden">
      <!-- soft glow -->
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative max-w-container-max mx-auto px-gutter pt-10 pb-14 md:pt-20 md:pb-24 text-center">
        <span class="inline-block text-xs font-bold uppercase tracking-[0.25em] text-white/70 mb-4">Kontakt</span>
        <h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-5">
          Kostenlose Erstberatung
        </h1>
        <p class="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          Erzählen Sie uns kurz von Ihrem Projekt — wir melden uns
          <span class="text-white font-semibold">innerhalb von 24 Stunden</span>
          mit einem unverbindlichen Angebot.
        </p>

        <!-- Trust chips -->
        <div class="flex flex-wrap gap-2 sm:gap-3 justify-center mt-7">
          <span v-for="chip in trustChips" :key="chip" class="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium">
            <span class="material-symbols-outlined text-base">check</span>
            {{ chip }}
          </span>
        </div>
      </div>
    </section>

    <!-- Two paths -->
    <section class="bg-surface py-10 md:py-section-padding">
      <div class="max-w-3xl mx-auto px-gutter">
        <!-- Tab switcher -->
        <div class="flex bg-surface-container-low rounded-full p-1.5 mb-8 max-w-md mx-auto shadow-inner">
          <button
            @click="tab = 'call'"
            :class="[
              'flex-1 py-3 px-4 rounded-full font-bold text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2 min-h-[44px]',
              tab === 'call' ? 'bg-primary text-on-primary shadow-md' : 'text-on-surface-variant hover:text-primary',
            ]"
          >
            <span class="material-symbols-outlined text-lg">event</span>
            Termin buchen
          </button>
          <button
            @click="tab = 'form'"
            :class="[
              'flex-1 py-3 px-4 rounded-full font-bold text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2 min-h-[44px]',
              tab === 'form' ? 'bg-primary text-on-primary shadow-md' : 'text-on-surface-variant hover:text-primary',
            ]"
          >
            <span class="material-symbols-outlined text-lg">mail</span>
            Anfrage schreiben
          </button>
        </div>

        <!-- Call booking panel -->
        <div v-if="tab === 'call'" class="bg-white rounded-2xl shadow-lg border border-outline-variant/20 p-6 sm:p-8 md:p-10 animate-fade-in-up">
          <div class="text-center mb-6">
            <h2 class="font-display text-2xl sm:text-3xl font-black text-on-surface mb-2">
              15-Min Strategiegespräch
            </h2>
            <p class="text-sm sm:text-base text-on-surface-variant max-w-md mx-auto">
              Unverbindliches Gespräch per Video oder Telefon. Wir besprechen Ihre Ziele und mögliche Lösungen.
            </p>
          </div>

          <!-- Cal.com inline embed -->
          <div class="rounded-xl overflow-hidden border border-outline-variant/30 bg-surface-container-low">
            <iframe
              :src="calComUrl"
              loading="lazy"
              title="Termin buchen"
              class="w-full h-[640px] md:h-[700px] border-0"
            />
          </div>

          <p class="text-xs text-on-surface-variant/70 text-center mt-4">
            Lieber direkt sprechen?
            <a href="tel:+491756200862" class="text-primary font-semibold hover:underline">+49 175 620 0862</a>
            ·
            <a href="https://wa.me/491756200862" target="_blank" rel="noopener" class="text-primary font-semibold hover:underline">WhatsApp</a>
          </p>
        </div>

        <!-- Form panel -->
        <div v-else class="bg-white rounded-2xl shadow-lg border border-outline-variant/20 p-6 sm:p-8 md:p-10 animate-fade-in-up">
          <div class="text-center mb-6">
            <h2 class="font-display text-2xl sm:text-3xl font-black text-on-surface mb-2">
              Schreiben Sie uns
            </h2>
            <p class="text-sm sm:text-base text-on-surface-variant max-w-md mx-auto">
              Füllen Sie das Formular aus — wir antworten innerhalb von 24 Stunden.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>

    <!-- Quick contact + price calc link -->
    <section class="bg-surface-container-low py-10 md:py-16 border-t border-outline-variant/30">
      <div class="max-w-4xl mx-auto px-gutter">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <a
            v-for="channel in quickChannels"
            :key="channel.label"
            :href="channel.href"
            :target="channel.external ? '_blank' : undefined"
            :rel="channel.external ? 'noopener' : undefined"
            class="group flex items-center gap-4 bg-white rounded-xl p-4 sm:p-5 border border-outline-variant/30 hover:border-primary/50 hover:shadow-md transition-all duration-200"
          >
            <div class="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <span class="material-symbols-outlined text-primary">{{ channel.icon }}</span>
            </div>
            <div class="min-w-0">
              <p class="text-xs uppercase tracking-wider text-on-surface-variant font-semibold">{{ channel.label }}</p>
              <p class="text-sm sm:text-base font-bold text-on-surface truncate">{{ channel.value }}</p>
            </div>
          </a>
        </div>

        <!-- Price calculator link -->
        <a
          href="/pricing"
          class="mt-6 flex items-center justify-between gap-4 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl p-4 sm:p-5 hover:shadow-lg transition-shadow duration-200 group"
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
import { ref } from 'vue';

useHead({
  title: 'Kontakt – Kostenlose Erstberatung | EvolaTec',
  meta: [
    { name: 'description', content: 'Kostenlose Erstberatung für Ihre Website oder Online Shop. Termin buchen oder Anfrage schreiben — Antwort innerhalb von 24 Stunden.' },
  ],
});

const tab = ref<'call' | 'form'>('call');

// Replace with your real Cal.com event link
const calComUrl = 'https://cal.com/evolatec/15min?embed=true&theme=light&hideEventTypeDetails=false';

const trustChips = [
  'Kostenlos & unverbindlich',
  'Antwort in 24 Stunden',
  'DSGVO-konform',
];

const quickChannels = [
  { icon: 'phone',  label: 'Telefon',  value: '+49 175 620 0862',  href: 'tel:+491756200862' },
  { icon: 'chat',   label: 'WhatsApp', value: 'Schnelle Antwort',  href: 'https://wa.me/491756200862', external: true },
  { icon: 'mail',   label: 'E-Mail',   value: 'team@evolatec.de',  href: 'mailto:team@evolatec.de' },
];

const faqs = [
  {
    question: 'Was passiert nach meiner Anfrage?',
    answer:
      'Wir prüfen Ihre Anfrage und melden uns innerhalb von 24 Stunden mit einem unverbindlichen Angebot oder Terminvorschlägen für ein Erstgespräch.',
  },
  {
    question: 'Ist die Erstberatung wirklich kostenlos?',
    answer:
      'Ja. Das 15-minütige Erstgespräch und das daraus resultierende Angebot sind komplett kostenlos und unverbindlich.',
  },
  {
    question: 'Kann ich mit einem kleinen Budget starten?',
    answer:
      'Ja. Landingpages starten ab 350€, Firmenwebsites ab 750€. Mit unserem Preis-Kalkulator erhalten Sie sofort eine Schätzung für Ihr Projekt.',
  },
  {
    question: 'Wann sind Sie erreichbar?',
    answer:
      'Montag bis Freitag von 9–17 Uhr. Für Notfälle sind wir auch außerhalb dieser Zeiten erreichbar — schreiben Sie uns einfach eine WhatsApp-Nachricht.',
  },
];
</script>
