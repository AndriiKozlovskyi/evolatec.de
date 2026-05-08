<template>
  <div>
    <!-- Hero Section -->
    <!-- Contact Section -->
    <section class="py-8 md:py-section-padding bg-white">
      <div class="max-w-container-max mx-auto px-gutter">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-stack-lg">
          <!-- Contact Information -->
          <div class="lg:col-span-1 order-2 lg:order-1">
            <div class="space-y-4 md:space-y-stack-md">
              <!-- Email -->
              <div class="group">
                <h3 class="text-base sm:text-headline-md font-bold text-on-surface mb-2 sm:mb-4 flex items-center gap-3">
                  <span class="material-symbols-outlined text-lg sm:text-2xl text-primary">mail</span>
                  E-Mail
                </h3>
                <a
                  href="mailto:team@evolatec.de"
                  class="text-sm sm:text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200"
                >
                  team@evolatec.de
                </a>
              </div>

              <!-- Phone -->
              <div class="group">
                <h3 class="text-base sm:text-headline-md font-bold text-on-surface mb-2 sm:mb-4 flex items-center gap-3">
                  <span class="material-symbols-outlined text-lg sm:text-2xl text-primary">phone</span>
                  Telefon
                </h3>
                <a
                  href="tel:+49123456789"
                  class="text-sm sm:text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200 break-all"
                >
                  +49 (0) 123 456789
                </a>
              </div>

              <!-- Location -->
              <div class="group">
                <h3 class="text-base sm:text-headline-md font-bold text-on-surface mb-2 sm:mb-4 flex items-center gap-3">
                  <span class="material-symbols-outlined text-lg sm:text-2xl text-primary">location_on</span>
                  Büro
                </h3>
                <p class="text-sm sm:text-body-md text-on-surface-variant">
                  Deutschland
                  <br />
                  Remote Support weltweit
                </p>
              </div>

              <!-- Response Time -->
              <div class="mt-4 sm:mt-8 p-4 sm:p-6 bg-primary/5 rounded-lg sm:rounded-xl border border-primary/10">
                <div class="flex items-center gap-3 mb-2">
                  <span class="material-symbols-outlined text-primary text-lg sm:text-xl">schedule</span>
                  <h4 class="font-bold text-sm sm:text-base text-on-surface">Antwortzeit</h4>
                </div>
                <p class="text-sm sm:text-body-md text-on-surface-variant">
                  Innerhalb von 24 Stunden
                </p>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-2 order-1 lg:order-2">
            <div class="bg-surface-container-low rounded-lg sm:rounded-2xl p-6 sm:p-8 md:p-12">
              <h2 class="text-xl sm:text-headline-lg font-bold text-on-surface mb-1 sm:mb-2">Schreiben Sie uns</h2>
              <p class="text-sm sm:text-body-md text-on-surface-variant mb-6 md:mb-stack-lg">
                Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Contact Section -->
    <section class="py-8 md:py-section-padding bg-gradient-to-r from-primary/90 via-primary to-primary/90 text-on-primary relative overflow-hidden">
      <!-- Background decoration - hidden on mobile -->
      <div class="hidden sm:block absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-on-primary-container/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-on-primary-container/10 rounded-full blur-3xl"></div>
      </div>

      <div class="relative z-10 max-w-container-max mx-auto px-gutter">
        <h2 class="font-display text-2xl sm:text-[2.5rem] md:text-[3rem] text-center mb-6 md:mb-stack-lg leading-tight">Warum mit EvolaTec arbeiten?</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div v-for="(benefit, index) in benefits" :key="index" class="text-center animate-fade-in-up" :style="{ animationDelay: `${index * 100}ms` }">
            <div class="inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-on-primary-container/20 mb-3 sm:mb-6">
              <span class="material-symbols-outlined text-lg sm:text-2xl">{{ benefit.icon }}</span>
            </div>
            <h3 class="text-base sm:text-headline-md font-bold mb-2 sm:mb-3">{{ benefit.title }}</h3>
            <p class="text-on-primary-container leading-relaxed text-sm sm:text-base">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <FAQSection
      title="Häufig gestellte Fragen"
      :faqs="faqs"
    />

    <!-- CTA Section -->
    <CTASection
      title="Bereit für Ihr Website-Projekt?"
      description="Lassen Sie uns gemeinsam Ihre Website zum Erfolg machen."
      primary-cta="Jetzt anfragen"
      secondary-cta="Preise ansehen"
    />
  </div>
</template>

<script setup lang="ts">
const heroStats = [
  { value: '24h', label: 'Antwortzeit', icon: 'schedule' },
  { value: '100%', label: 'Kundenzufriedenheit', icon: 'sentiment_satisfied' },
  { value: '50+', label: 'Projekte', icon: 'check_circle' },
  { value: 'Deutschland', label: 'Servicegebiet', icon: 'public' },
];

const benefits = [
  {
    icon: 'headset_mic',
    title: 'Persönliche Betreuung',
    description: 'Jedes Projekt wird von einem dedizierten Team betreut. Ihre Fragen sind uns wichtig.',
  },
  {
    icon: 'schedule',
    title: 'Schnelle Umsetzung',
    description: 'Wir arbeiten effizient und halten uns an vereinbarte Deadlines. Ab 3 Tagen sind Sie online.',
  },
  {
    icon: 'verified',
    title: 'Transparente Kommunikation',
    description: 'Klare Preise, regelmäßige Updates und offene Diskussionen über Ihre Ziele.',
  },
];

const faqs = [
  {
    question: 'Wie schnell erhalte ich ein Angebot?',
    answer:
      'Nach Ihrem Kontakt prüfen wir Ihre Anfrage und erstellen Ihnen innerhalb von 24 Stunden ein maßgeschneidertes Angebot.',
  },
  {
    question: 'Kann ich mit einem kleinen Budget starten?',
    answer:
      'Ja, absolut. Unsere Leistungen starten ab 350€ für Landingpages. Wir haben flexible Pakete für jedes Budget.',
  },
  {
    question: 'Welche Zahlungsarten akzeptieren Sie?',
    answer:
      'Wir akzeptieren Banküberweisung, Kreditkarte und PayPal. Gerne besprechen wir flexible Zahlungspläne.',
  },
  {
    question: 'Kann ich mit Ihnen zu jeder Tageszeit kommunizieren?',
    answer:
      'Montag bis Freitag von 9-17 Uhr. Für Notfälle können wir flexible Zeiten vereinbaren. Emails beantworten wir auch außerhalb dieser Zeiten.',
  },
  {
    question: 'Erhalte ich nach dem Launch Support?',
    answer:
      'Ja. Im Preis ist grundlegender Support enthalten. Erweiterten Support und Wartung können Sie optional hinzubuchen.',
  },
  {
    question: 'Wie kann ich meine Website später ändern?',
    answer:
      'Sie erhalten Zugang zu einem benutzerfreundlichen Content-Management-System (CMS). Gerne unterstützen wir Sie auch bei Änderungen.',
  },
];
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}
</style>
